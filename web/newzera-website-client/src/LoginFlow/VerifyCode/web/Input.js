import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './VerifyCodeWeb.css'

/**
 * This is react stateless component
 * Renders an input box
 * @param {Object} {
 *   focus,
 *   autoFocus,
 *   disabled,
 *   value,
 *   secure,
 *   ...rest
 * }
 * @returns
 */
const Input = ({ focus, autoFocus, disabled, onInputFocus, index, secure, numInputs, ...rest }) => {
  const [value, setvalue] = useState('')
  const input = useRef(null)
  const componentMounted = useRef(false)
  useEffect(() => {
    // When component mounts
    if (autoFocus && focus) {
      input.current.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // When component focus updates
    if (componentMounted.current && focus) {
      input.current.focus()
    }
    componentMounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus])

  const handelInputFocus = (event) => onInputFocus(index, event)
  let inputType = 'text'
  if (secure) {
    inputType = 'password'
  }
  return (
    <input
      className="hello"
      type={inputType}
      maxLength="1"
      ref={input}
      disabled={disabled}
      onFocus={handelInputFocus}
      value={value}
      onChange={(e) => setvalue(e.target.value)}
      numInputs={numInputs}
      data-testid="input"
      {...rest}
    />
  )
}

Input.propTypes = {
  focus: PropTypes.bool,
  autoFocus: PropTypes.bool,
  numInputs: PropTypes.number,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  disabled: PropTypes.bool,
  secure: PropTypes.bool
}

Input.defaultProps = {
  focus: 1,
  autoFocus: 1,
  numInputs: 1,
  index: 1,
  onChange: () => {},
  onInputFocus: () => {},
  disabled: false,
  secure: true
}

export default Input
