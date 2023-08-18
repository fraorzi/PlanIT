/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Wczytywanie zadań i posiłków z localStorage podczas ładowania strony
document.addEventListener('DOMContentLoaded', function () {
  var savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
  var _iterator = _createForOfIteratorHelper(savedTasks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var task = _step.value;
      displayTask(task);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(savedMeals),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var meal = _step2.value;
      displayMeal(meal.name, meal.calories);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
function addTask() {
  var input = document.getElementById('taskInput');
  if (input.value) {
    displayTask(input.value);
    saveTask(input.value);
    input.value = '';
  }
}
function addMeal() {
  var mealInput = document.getElementById('mealInput');
  var caloriesInput = document.getElementById('caloriesInput');
  if (mealInput.value && caloriesInput.value) {
    displayMeal(mealInput.value, caloriesInput.value);
    saveMeal(mealInput.value, caloriesInput.value);
    mealInput.value = '';
    caloriesInput.value = '';
  }
}
function displayTask(task) {
  var list = document.getElementById('taskList');
  var li = document.createElement('li');
  li.innerText = task;
  list.appendChild(li);
}
function displayMeal(name, calories) {
  var list = document.getElementById('mealList');
  var li = document.createElement('li');
  li.innerText = "".concat(name, " - ").concat(calories, " kcal");
  list.appendChild(li);
}
function saveTask(task) {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function saveMeal(name, calories) {
  var meals = JSON.parse(localStorage.getItem('meals')) || [];
  meals.push({
    name: name,
    calories: calories
  });
  localStorage.setItem('meals', JSON.stringify(meals));
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLFFBQVEsRUFBRTtFQUNqQyxJQUFNUyxJQUFJLEdBQUdsQyxRQUFRLENBQUM0QixjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ2hELElBQU1PLEVBQUUsR0FBR25DLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDdkNELEVBQUUsQ0FBQ0UsU0FBUyxNQUFBRSxNQUFBLENBQU1mLElBQUksU0FBQWUsTUFBQSxDQUFNZCxRQUFRLFVBQU87RUFDM0NTLElBQUksQ0FBQ0ksV0FBVyxDQUFDSCxFQUFFLENBQUM7QUFDeEI7QUFFQSxTQUFTTixRQUFRQSxDQUFDZixJQUFJLEVBQUU7RUFDcEIsSUFBTTBCLEtBQUssR0FBR3JDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7RUFDN0RrQyxLQUFLLENBQUNDLElBQUksQ0FBQzNCLElBQUksQ0FBQztFQUNoQlQsWUFBWSxDQUFDcUMsT0FBTyxDQUFDLE9BQU8sRUFBRXZDLElBQUksQ0FBQ3dDLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7QUFDeEQ7QUFFQSxTQUFTUCxRQUFRQSxDQUFDVCxJQUFJLEVBQUVDLFFBQVEsRUFBRTtFQUM5QixJQUFNbUIsS0FBSyxHQUFHekMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtFQUM3RHNDLEtBQUssQ0FBQ0gsSUFBSSxDQUFDO0lBQUNqQixJQUFJLEVBQUpBLElBQUk7SUFBRUMsUUFBUSxFQUFSQTtFQUFRLENBQUMsQ0FBQztFQUM1QnBCLFlBQVksQ0FBQ3FDLE9BQU8sQ0FBQyxPQUFPLEVBQUV2QyxJQUFJLENBQUN3QyxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDO0FBQ3hELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWt0X2tvbmNvd3lfY2wvLi9kZXZlbG9wbWVudC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gV2N6eXR5d2FuaWUgemFkYcWEIGkgcG9zacWCa8OzdyB6IGxvY2FsU3RvcmFnZSBwb2RjemFzIMWCYWRvd2FuaWEgc3Ryb255XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgICBjb25zdCBzYXZlZE1lYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVhbHMnKSkgfHwgW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHNhdmVkVGFza3MpIHtcclxuICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG1lYWwgb2Ygc2F2ZWRNZWFscykge1xyXG4gICAgICAgIGRpc3BsYXlNZWFsKG1lYWwubmFtZSwgbWVhbC5jYWxvcmllcyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFzaygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIGRpc3BsYXlUYXNrKGlucHV0LnZhbHVlKTtcclxuICAgICAgICBzYXZlVGFzayhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTWVhbCgpIHtcclxuICAgIGNvbnN0IG1lYWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsSW5wdXQnKTtcclxuICAgIGNvbnN0IGNhbG9yaWVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fsb3JpZXNJbnB1dCcpO1xyXG5cclxuICAgIGlmIChtZWFsSW5wdXQudmFsdWUgJiYgY2Fsb3JpZXNJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIGRpc3BsYXlNZWFsKG1lYWxJbnB1dC52YWx1ZSwgY2Fsb3JpZXNJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgc2F2ZU1lYWwobWVhbElucHV0LnZhbHVlLCBjYWxvcmllc0lucHV0LnZhbHVlKTtcclxuICAgICAgICBtZWFsSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICBjYWxvcmllc0lucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmlubmVyVGV4dCA9IHRhc2s7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lYWwobmFtZSwgY2Fsb3JpZXMpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbExpc3QnKTtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmlubmVyVGV4dCA9IGAke25hbWV9IC0gJHtjYWxvcmllc30ga2NhbGA7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRhc2sodGFzaykge1xyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlTWVhbChuYW1lLCBjYWxvcmllcykge1xyXG4gICAgY29uc3QgbWVhbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZWFscycpKSB8fCBbXTtcclxuICAgIG1lYWxzLnB1c2goe25hbWUsIGNhbG9yaWVzfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVhbHMnLCBKU09OLnN0cmluZ2lmeShtZWFscykpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlZFRhc2tzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkTWVhbHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidGFzayIsInZhbHVlIiwiZGlzcGxheVRhc2siLCJlcnIiLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJtZWFsIiwiZGlzcGxheU1lYWwiLCJuYW1lIiwiY2Fsb3JpZXMiLCJhZGRUYXNrIiwiaW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUYXNrIiwiYWRkTWVhbCIsIm1lYWxJbnB1dCIsImNhbG9yaWVzSW5wdXQiLCJzYXZlTWVhbCIsImxpc3QiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImNvbmNhdCIsInRhc2tzIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJtZWFscyJdLCJzb3VyY2VSb290IjoiIn0=