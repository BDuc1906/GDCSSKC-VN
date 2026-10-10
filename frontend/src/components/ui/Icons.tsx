import type { SVGProps, ReactNode } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

function Base({
    size = 20,
    children,
    ...rest
}: IconProps & { children: ReactNode }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...rest}
        >
            {children}
        </svg>
    );
}

export function IconSearch(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </Base>
    );
}

export function IconMenu(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
        </Base>
    );
}

export function IconClose(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </Base>
    );
}

export function IconSun(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
        </Base>
    );
}

export function IconMoon(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
        </Base>
    );
}

export function IconGlobe(props: IconProps) {
    return (
        <Base {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
        </Base>
    );
}

export function IconHeartPulse(props: IconProps) {
    return (
        <Base {...props}>
            <path d="M12 20.5s-7-4.5-7-9.5a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5-7 9.5-7 9.5z" />
            <path d="M5.5 11.5h2.5l1.5-3 2 6 1.5-3h2" />
        </Base>
    );
}

export function IconChevronDown(props: IconProps) {
    return (
        <Base {...props}>
            <path d="m6 9 6 6 6-6" />
        </Base>
    );
}