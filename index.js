var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var imageData = [
    { text: 'one' },
    { text: 'two' },
    { text: 'three' },
];
var images = imageData.reduce(function (total, current, index) {
    var _a, _b;
    var newObj = current;
    newObj.next = (_a = total[index + 1]) !== null && _a !== void 0 ? _a : total[0];
    newObj.prev = (_b = total[index - 1]) !== null && _b !== void 0 ? _b : total[total.length - 1];
    return __spreadArray(__spreadArray([], total, true), [newObj], false);
}, imageData);
var selectedImage = images[0];
for (var i = 0; i < 10; i++) {
    console.log(selectedImage.text);
    selectedImage = selectedImage.next;
}
