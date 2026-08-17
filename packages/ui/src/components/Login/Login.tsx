"use client";
import { useState, type FormEvent } from 'react';
import styles from '../../styles/Login/Login.module.css';

export interface LoginProps {
    logoSrc: string;
    arrowSrc: string;
    subtitle: string;
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    forgotPasswordText: string;
    submitText: string;
    noAccountText: string;
    contactLinkText: string;
    contactSuffixText: string;
    footerCopyright: string;
    footerContactText: string;
    footerPrivacyText: string;
    error?: LoginError;

    onForgotPasswordClick?: () => void;
    onContactClick?: () => void;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export interface LoginError {
    message: string;
    variant: 'error' | 'warning';
    iconSrc: string;
}


export const Login = ({
    logoSrc,
    arrowSrc,
    subtitle,
    title,
    description,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    forgotPasswordText,
    submitText,
    noAccountText,
    contactLinkText,
    contactSuffixText,
    footerCopyright,
    footerContactText,
    footerPrivacyText,
    error,
    onForgotPasswordClick,
    onContactClick,
    onSubmit,
}: LoginProps) => {

    const [showPassword, setShowPassword] = useState(false);
    const EyeIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );

    const EyeOffIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.53 13.53 0 0 0 1 12s4 7 11 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
    );

    return (
        <div className={styles.page}>
            <div className={styles.brand}>
                <img src={logoSrc} alt="tvim" className={styles.logo} />
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.card}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>

                {error && (
                    <div
                        className={`${styles.alert} ${error.variant === 'warning' ? styles.alertWarning : styles.alertError
                            }`}
                    >
                        <img src={error.iconSrc} alt="" className={styles.alertIcon} />
                        <span className={styles.alertText}>{error.message}</span>
                    </div>
                )}


                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>{emailLabel}</label>
                        <input id="email" type="email" placeholder={emailPlaceholder} className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password" className={styles.label}>{passwordLabel}</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder={passwordPlaceholder}
                                className={styles.input}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className={styles.eyeButton}
                                aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </div>

                    <div className={styles.forgotRow}>
                        <a href="#" onClick={onForgotPasswordClick} className={styles.link}>{forgotPasswordText}</a>
                    </div>
<button
  type="submit"
  className={`${styles.submit} ${error ? styles.submitError : ''}`}
  disabled={Boolean(error)}
>
  <span>{submitText}</span>
  <img src={arrowSrc} alt="" className={styles.arrow} />
</button>

                    <div className={styles.noAccount}>
                        <p className={styles.noAccountQuestion}>{noAccountText}</p>
                        <p className={styles.noAccountAction}>
                            <a href="#" onClick={onContactClick} className={styles.link}>{contactLinkText}</a>
                            {' '}{contactSuffixText}
                        </p>
                    </div>
                </form>
            </div>

            <p className={styles.footer}>
                {footerCopyright} •{' '}
                <a href="#" className={styles.link}>{footerContactText}</a> •{' '}
                <a href="#" className={styles.link}>{footerPrivacyText}</a>
            </p>
        </div>
    );
};