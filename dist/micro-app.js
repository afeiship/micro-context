"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _eventMitt = _interopRequireDefault(require("event-mitt"));

var _lodash = _interopRequireDefault(require("lodash"));

var _microContext = _interopRequireDefault(require("./micro-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(inProps) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, inProps));
    _this.state = _this.constructor.initialState();
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.__global__ = {};
    Object.assign(_assertThisInitialized(_this), _eventMitt["default"]);
    return _this;
  }

  _createClass(_default, [{
    key: "update",
    value: function update(inState) {
      var memory = this.state.memory;

      _lodash["default"].forIn(inState, function (value, key) {
        _lodash["default"].set(memory, key, value);
      });

      this.setState({
        memory: memory
      });
    }
  }, {
    key: "getApp",
    value: function getApp() {
      console.error('MUST BE IMPLEMENT!');
    }
  }, {
    key: "render",
    value: function render() {
      var memory = this.state.memory;
      return _react["default"].createElement(_microContext["default"].Provider, {
        value: {
          memory: memory,
          app: this,
          update: this.update
        }
      }, this.getApp());
    }
  }, {
    key: "memory",
    set: function set(inValue) {
      this.update(inValue);
    },
    get: function get() {
      var memory = this.state.memory;
      return memory;
    }
  }, {
    key: "global",
    set: function set(inValue) {
      var _this2 = this;

      _lodash["default"].forIn(inValue, function (value, key) {
        _lodash["default"].set(_this2.__global__, key, value);
      });
    },
    get: function get() {
      return this.__global__;
    }
  }]);

  return _default;
}(_react["default"].Component);

exports["default"] = _default;