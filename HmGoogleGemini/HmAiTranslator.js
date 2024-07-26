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

    // 空行をフィルタリング
    answer_text_array = answer_text_array.filter(t => t.length > 0);

    // 改行を挟んで再結合
    answer_text = answer_text_array.join("\n");

    begingroupundo();

    // 行末まで選択することで、カーソルが先頭にある。
    if (selend_wcs() == 0) {
        // 行を翻訳するので最後に改行を入れる
        insert(answer_text + "\n");
    }

    // 文末まで選択することで行選択相当になっている。
    else if (selend_wcs() == linelen_wcs()) {
        // 文末に最後改行が無いので、先頭に改行を入れる
        insert("\n" + answer_text + "\n");
    }

    // 通常の選択
    else {
        insert(answer_text);
    }

    endgroupundo();
}

function doMyCustomMain({aiMacroPath}) {

    if (hidemaru.getSelectedText() == "") {
        let dll = loaddll(hidemaruExeDir + "\\HmOutputPane.dll");
        dll.dllfunc.Output(hidemaru.getCurrentWindowHandle(), "選択テキストがありません\r\n");
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

