import { useState } from 'react';
import { type Control, Controller, type FieldError } from 'react-hook-form';
import SvgCloseEye from '../icons/close-eye';
import SvgOpenEye from '../icons/open-eye';
import { getClasses } from './styles/get-classes';

type InputProps = {
  name: string;
  control: Control<any>;
  className?: string;
  title?: string;
  placeholder?: string;
  helperText?: string;
  security?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  disabled?: boolean;
  error?: FieldError | string;
};

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
              type={security && !showPassword ? 'password' : 'text'}
              placeholder={placeholder}
              className={cnInput}
              disabled={disabled}
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
