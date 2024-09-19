/*
 * HmAiTranslator v1.0.2.1
 *
 * Copyright (c) 2024 Akitsugu Komiyama
 * under the MIT License
 */

function onRequestQuestionText() {
}

function onCompleteAnswerText(answer_text) {

    // 先頭付近と末尾付近の空白行を削除し、途中の空白行は有効とする
    answer_text = answer_text.replace(/^\s*[\r\n]+|[\r\n]+\s*$/g, '');

    // 改行を追加する関数
    const ensureNewline = (text) => {
        return text.endsWith("\n") ? text : text + "\n";
    }

    begingroupundo();

    // 行末まで選択することで、カーソルが先頭にある。
    if (selendcolumn() == 0) {
        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = ensureNewline(answer_text);

        // 行を翻訳するので最後に改行を入れる
        insert(answer_text);
    }

    // 文頭から文末まで選択することで行選択相当になっている。
    else if (seltopcolumn() == 0 && selendcolumn() == linelen2()) {

        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = ensureNewline(answer_text);

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
        let dll = loaddll("HmOutputPane.dll");
        dll.dllFuncW.OutputW(hidemaru.getCurrentWindowHandle(), msg + "\r\n");
    }

    if (!hidemaru.getSelectedText()) {
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

