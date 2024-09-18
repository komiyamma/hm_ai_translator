/*
 * HmAiTranslator v1.0.1.1
 *
 * Copyright (c) 2024 Akitsugu Komiyama
 * under the MIT License
 */

function onRequestQuestionText() {
}

function onCompleteAnswerText(answer_text) {

    answer_text = answer_text.replace(/(\n|\r| )+$/, '\n');
    let answer_text_array = answer_text.replaceAll("\r", "").split("\n");

    // 実際に要素が存在する先頭の添え字は？
    const start = answer_text_array.findIndex(el => el !== "");

    // 実際に要素が存在する最後の添え字は？
    const end = answer_text_array.length - answer_text_array.findIndex(el => el !== "") - 1;

    answer_text = answer_text.slice(start, end + 1);

    // 改行を挟んで再結合
    answer_text = answer_text_array.join("\n");

    begingroupundo();

    // 行末まで選択することで、カーソルが先頭にある。
    if (selendcolumn() == 0) {
        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = answer_text.endsWith("\n") ? answer_text : answer_text+"\n";

        // 行を翻訳するので最後に改行を入れる
        insert(answer_text);
    }

    // 文頭から文末まで選択することで行選択相当になっている。
    else if (seltopcolumn() == 0 && selendcolumn() == linelen2()) {

        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = answer_text.endsWith("\n") ? answer_text : answer_text+"\n";

        // 文末に改行が含まれてないので、先頭に改行を入れる
        insert("\n" + answer_text);
    }

    // 通常の選択
    else {
        insert(answer_text);
    }

    endgroupundo();
}

function doMyCustomMain({aiMacroPath}) {

    let writeLineOutputPane = (msg) => {
        let dll = loaddll(hidemaruExeDir + "\\HmOutputPane.dll");
        dll.dllfunc.Output(hidemaru.getCurrentWindowHandle(), msg + "\r\n");
    }

    if (hidemaru.getSelectedText() == "") {
        writeLineOutputPane("選択テキストがありません");
        return;
    }

    if (!existfile(aiMacroPath)) {
        writeLineOutputPane("「" + aiMacroPath + "」というファイルは存在しません");
        return;
    }

    const argobj = {
        onRequestQuestionText: 1,
        onCompleteAnswerText: 1
    };

    hidemaru.setTimeout(
        () => { hidemaru.postExecMacroFile(`"${aiMacroPath}"`, argobj); },
    0 );
}

