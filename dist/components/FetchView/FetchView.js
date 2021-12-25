"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _statuses = require("../../constants/statuses");

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FetchContext = /*#__PURE__*/(0, _react.createContext)();

function useFetchContext() {
  var context = _react["default"].useContext(FetchContext);

  if (!context) {
    throw new Error('FetchView compound component cannot be rendered outside the FetchView component');
  }

  return context;
}

function DefaultView(_ref) {
  var children = _ref.children;

  var _useFetchContext = useFetchContext(),
      status = _useFetchContext.status;

  return !status ? children : null;
}

function FetchingView(_ref2) {
  var children = _ref2.children;

  var _useFetchContext2 = useFetchContext(),
      status = _useFetchContext2.status;

  return status === _statuses.Statuses.Loading ? children || /*#__PURE__*/_react["default"].createElement("div", null, "Loading...") : null;
}

function FetchedView(_ref3) {
  var children = _ref3.children;

  var _useFetchContext3 = useFetchContext(),
      status = _useFetchContext3.status;

  return status === _statuses.Statuses.Success ? children : null;
}

function ErrorView(_ref4) {
  var children = _ref4.children;

  var _useFetchContext4 = useFetchContext(),
      status = _useFetchContext4.status;

  return status === _statuses.Statuses.Error ? children : null;
}

function FetchView(props) {
  var children = props.children,
      fetchStates = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(FetchContext.Provider, {
    value: fetchStates
  }, children);
}

FetchView.Initial = DefaultView;
FetchView.Fetching = FetchingView;
FetchView.Fetched = FetchedView;
FetchView.Error = ErrorView;
FetchView.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = FetchView;
exports["default"] = _default;