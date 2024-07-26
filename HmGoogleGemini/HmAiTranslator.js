/*
 * HmAiTranslatorToEn v1.0.0.2
 *
 * Copyright (c) 2024 Akitsugu Komiyama
 * under the MIT License
 */

function onRequestQuestionText() {
}

function onCompleteAnswerText(answer_text) {

    begingroupundo();

    // カーソル位置が行末なら改行
    // (行選択的なことをしている場合は、翻訳結果は次の行から開始するのが適切なため)
    if (column_wcs() >= linelen_wcs()-1) {
        answer_text = answer_text.replace(/(\n|\r| )+$/, '\n');
        insert("\n" + answer_text);
    }
    else {
        answer_text = answer_text.replace(/(\n|\r| )+$/, '');
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

