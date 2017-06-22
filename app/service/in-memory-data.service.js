"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { id: 11, src: 'public/images/1/b-2.jpg', name: '针灸大成', author: "杨继洲 ", publish: "第一版", summery: "参考明以前20余种针灸著作，并结合作者针灸临床经验编成此书", price: 25, },
            { id: 12, src: 'public/images/1/b-3.jpg', name: '伤寒论', author: "张仲景", publish: "第一版", summery: "是一部阐述外感病治疗规律的专著，全书10卷", price: 43, },
            { id: 13, src: 'public/images/1/b-4.jpg', name: '心血管内科', author: "黄岚", publish: "第一版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 76, },
            { id: 14, src: 'public/images/1/b-5.jpg', name: '心血管内科', author: "万三", publish: "第三版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 65, },
            { id: 15, src: 'public/images/1/b-6.jpg', name: '基础护理学', author: "李小寒", publish: "第三版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 34, },
            { id: 16, src: 'public/images/1/b-7.jpg', name: '内科护理学', author: "尤黎明", publish: "第五版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 42, },
            { id: 17, src: 'public/images/1/b-7.jpg', name: '静脉血栓栓塞', author: "张福先", publish: "第一版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 56, },
            { id: 18, src: 'public/images/1/b-7.jpg', name: 'DrIQ', author: "刘敏国", publish: "第六版", summery: "用户应该能在一个<input>输入框中编辑英雄的名字。 当用户输入时，这个输入框应该能同时显示和修改英雄的name属性。", price: 90, }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map