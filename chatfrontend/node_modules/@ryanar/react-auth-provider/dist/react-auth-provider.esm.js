import React from 'react';

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = React.useRef(); // Store current value in ref

  React.useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

/* istanbul ignore next */

var noop = function noop() {};

var AuthContext =
/*#__PURE__*/
React.createContext({
  authenticated: false,
  setAuthenticated: noop
});

var AuthProvider = function AuthProvider(_ref) {
  var _ref$defaultAuthentic = _ref.defaultAuthenticated,
      defaultAuthenticated = _ref$defaultAuthentic === void 0 ? false : _ref$defaultAuthentic,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      children = _ref.children;

  var _React$useState = React.useState(defaultAuthenticated),
      authenticated = _React$useState[0],
      setAuthenticated = _React$useState[1];

  var previousAuthenticated = usePrevious(authenticated);
  React.useEffect(function () {
    if (!previousAuthenticated && authenticated) {
      onLogin && onLogin();
    }
  }, [previousAuthenticated, authenticated, onLogin]);
  React.useEffect(function () {
    if (previousAuthenticated && !authenticated) {
      onLogout && onLogout();
    }
  }, [previousAuthenticated, authenticated, onLogout]);
  var contextValue = React.useMemo(function () {
    return {
      authenticated: authenticated,
      setAuthenticated: setAuthenticated
    };
  }, [authenticated]);
  return React.createElement(AuthContext.Provider, {
    value: contextValue
  }, children);
};

export { AuthContext, AuthProvider };
//# sourceMappingURL=react-auth-provider.esm.js.map
