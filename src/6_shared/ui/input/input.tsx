import { useState, type InputHTMLAttributes } from 'react';
import { Controller, type Control, type FieldError } from 'react-hook-form';
import SvgCloseEye from '../icons/close-eye';
import SvgOpenEye from '../icons/open-eye';
import { getClasses } from './styles/get-classes';

type BaseInputProps = {
  name: string;
  control: Control<any>;
  title?: string;
  helperText?: string;
  security?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  error?: FieldError | string;
};

export type InputProps = BaseInputProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'defaultValue' | 'security'
  >;

export const Input = ({
  name,
  control,
  className,
  title,
  placeholder,
  helperText,
  security,
  isSuccess,
  isError,
  disabled,
  error,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    cnWrapper,
    cnTitle,
    cnRoot,
    cnInput,
    cnHelper,
    cnIconBtn,
    cnEyeIcon,
  } = getClasses({
    className,
    isSuccess,
    isError: !!error || isError,
    disabled,
  });

  const errorMessage = typeof error === 'string' ? error : error?.message;

  return (
    <div className={cnWrapper}>
      {title && <label className={cnTitle}>{title}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className={cnRoot}>
            <input
              {...field}
              {...props}
              type={security && !showPassword ? 'password' : 'text'}
              placeholder={placeholder}
              className={cnInput}
              disabled={disabled}
              onChange={e => {
                let value: string | number = e.target.value;

                if (props.type === 'number') {
                  if (/^\d*$/.test(value)) {
                    value = value === '' ? '' : Number(value);
                    field.onChange(value);
                  }
                } else {
                  field.onChange(value);
                }

                props.onChange?.(e);
              }}
            />
            {security && (
              <button
                type="button"
                className={cnIconBtn}
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? (
                  <SvgOpenEye className={cnEyeIcon} />
                ) : (
                  <SvgCloseEye className={cnEyeIcon} />
                )}
              </button>
            )}
          </div>
        )}
      />

      {(errorMessage || helperText) && (
        <p className={cnHelper}>{errorMessage || helperText}</p>
      )}
    </div>
  );
};
