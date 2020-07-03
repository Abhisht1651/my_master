// @flow
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import useOTP from './hooks/useOTP'

type Props = {
  className: string,
  OTPLength: number,
  onChange: PropTypes.func.isRequired,
  disabled: boolean,
  autoFocus: boolean,
  secure: boolean,
  value: string,
  style: PropTypes.object
}

const OtpInput = (props: Props) => {
  const { className, OTPLength, onChange, disabled, autoFocus, secure, value, style } = props

  const {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus
  } = useOTP({
    autoFocus,
    value,
    onChange,
    OTPLength
  })

  // Needs to be memorized
  const renderInputs = useMemo(() => {
    const otp = getOtpValue()
    const inputs = []

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < OTPLength; index++) {
      inputs.push(
        <Input
          key={index}
          focus={activeInput === index}
          value={otp[index]}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onInput={handelOnInput}
          onPaste={handleOnPaste}
          onInputFocus={onInputFocus}
          index={index}
          // onBlur={() => setActiveInput(-1)}
          disabled={disabled}
          autoFocus={autoFocus}
          secure={secure}
          data-testid="input"
        />
      )
    }

    return inputs
  }, [
    getOtpValue,
    OTPLength,
    activeInput,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
    disabled,
    autoFocus,
    secure
  ])

  return (
    <div
      style={{ display: 'flex', ...style }}
      className={`${className}`}
      data-testid="otp-input-root">
      {renderInputs}
    </div>
  )
}

OtpInput.defaultProps = {
  className: '',
  OTPLength: 6,
  onChange: () => {},
  disabled: false,
  secure: false,
  autoFocus: false,
  value: '',
  style: {}
}

export default OtpInput
