import clsx from 'clsx'
import { Theme } from './types'

const SvgIcon = ({
  className,
  children,
  ...props
}: React.ComponentProps<'svg'>) => (
  <svg
    className={clsx('w-6 h6', className)}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
)

export const LightIcon = (props: React.ComponentProps<'svg'>) => (
  <SvgIcon {...props}>
    <path d="M12 15.5C12.9667 15.5 13.7917 15.1583 14.475 14.475C15.1583 13.7917 15.5 12.9667 15.5 12C15.5 11.0333 15.1583 10.2083 14.475 9.525C13.7917 8.84167 12.9667 8.5 12 8.5C11.0333 8.5 10.2083 8.84167 9.525 9.525C8.84167 10.2083 8.5 11.0333 8.5 12C8.5 12.9667 8.84167 13.7917 9.525 14.475C10.2083 15.1583 11.0333 15.5 12 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z" />
  </SvgIcon>
)

export const DarkIcon = (props: React.ComponentProps<'svg'>) => (
  <SvgIcon {...props}>
    <path d="M12 21.0001C9.5 21.0001 7.375 20.1251 5.625 18.3751C3.875 16.6251 3 14.5001 3 12.0001C3 9.75011 3.6625 7.84178 4.9875 6.27511C6.3125 4.70844 8.05 3.70011 10.2 3.25011C10.8833 3.11678 11.35 3.23344 11.6 3.60011C11.85 3.96678 11.8417 4.46678 11.575 5.10011C11.425 5.48344 11.3083 5.87511 11.225 6.27511C11.1417 6.67511 11.1 7.08344 11.1 7.50011C11.1 9.00011 11.625 10.2751 12.675 11.3251C13.725 12.3751 15 12.9001 16.5 12.9001C16.9167 12.9001 17.3208 12.8626 17.7125 12.7876C18.1042 12.7126 18.4833 12.6084 18.85 12.4751C19.5667 12.2084 20.1 12.2209 20.45 12.5126C20.8 12.8043 20.8917 13.3001 20.725 14.0001C20.275 16.0168 19.2667 17.6876 17.7 19.0126C16.1333 20.3376 14.2333 21.0001 12 21.0001ZM12 19.5001C13.8167 19.5001 15.4 18.9376 16.75 17.8126C18.1 16.6876 18.9417 15.3668 19.275 13.8501C18.8583 14.0334 18.4125 14.1709 17.9375 14.2626C17.4625 14.3543 16.9833 14.4001 16.5 14.4001C14.5833 14.4001 12.9542 13.7293 11.6125 12.3876C10.2708 11.0459 9.6 9.41678 9.6 7.50011C9.6 7.10011 9.64167 6.67094 9.725 6.21261C9.80833 5.75428 9.95833 5.23344 10.175 4.65011C8.54167 5.10011 7.1875 6.01261 6.1125 7.38761C5.0375 8.76261 4.5 10.3001 4.5 12.0001C4.5 14.0834 5.22917 15.8543 6.6875 17.3126C8.14583 18.7709 9.91667 19.5001 12 19.5001Z" />
  </SvgIcon>
)

export const SystemIcon = (props: React.ComponentProps<'svg'>) => (
  <SvgIcon {...props}>
    <path d="M13.6501 22H10.3501C10.1668 22 10.0043 21.9417 9.8626 21.825C9.72093 21.7083 9.63343 21.5583 9.6001 21.375L9.2001 18.85C8.88343 18.7333 8.5501 18.575 8.2001 18.375C7.8501 18.175 7.54176 17.9667 7.2751 17.75L4.9501 18.825C4.76676 18.9083 4.58343 18.9208 4.4001 18.8625C4.21676 18.8042 4.0751 18.6833 3.9751 18.5L2.3251 15.575C2.2251 15.4083 2.2001 15.2333 2.2501 15.05C2.3001 14.8667 2.4001 14.7167 2.5501 14.6L4.7001 13.025C4.66676 12.875 4.64593 12.7042 4.6376 12.5125C4.62926 12.3208 4.6251 12.15 4.6251 12C4.6251 11.85 4.62926 11.6792 4.6376 11.4875C4.64593 11.2958 4.66676 11.125 4.7001 10.975L2.5501 9.4C2.4001 9.28333 2.3001 9.13333 2.2501 8.95C2.2001 8.76667 2.2251 8.59167 2.3251 8.425L3.9751 5.5C4.0751 5.31667 4.21676 5.19583 4.4001 5.1375C4.58343 5.07917 4.76676 5.09167 4.9501 5.175L7.2751 6.25C7.54176 6.03333 7.8501 5.825 8.2001 5.625C8.5501 5.425 8.88343 5.275 9.2001 5.175L9.6001 2.625C9.63343 2.44167 9.72093 2.29167 9.8626 2.175C10.0043 2.05833 10.1668 2 10.3501 2H13.6501C13.8334 2 13.9959 2.05833 14.1376 2.175C14.2793 2.29167 14.3668 2.44167 14.4001 2.625L14.8001 5.15C15.1168 5.26667 15.4543 5.42083 15.8126 5.6125C16.1709 5.80417 16.4751 6.01667 16.7251 6.25L19.0501 5.175C19.2334 5.09167 19.4168 5.07917 19.6001 5.1375C19.7834 5.19583 19.9251 5.31667 20.0251 5.5L21.6751 8.4C21.7751 8.56667 21.8043 8.74583 21.7626 8.9375C21.7209 9.12917 21.6168 9.28333 21.4501 9.4L19.3001 10.925C19.3334 11.0917 19.3543 11.2708 19.3626 11.4625C19.3709 11.6542 19.3751 11.8333 19.3751 12C19.3751 12.1667 19.3709 12.3417 19.3626 12.525C19.3543 12.7083 19.3334 12.8833 19.3001 13.05L21.4501 14.6C21.6001 14.7167 21.7001 14.8667 21.7501 15.05C21.8001 15.2333 21.7751 15.4083 21.6751 15.575L20.0251 18.5C19.9251 18.6833 19.7834 18.8042 19.6001 18.8625C19.4168 18.9208 19.2334 18.9083 19.0501 18.825L16.7251 17.75C16.4584 17.9667 16.1543 18.1792 15.8126 18.3875C15.4709 18.5958 15.1334 18.75 14.8001 18.85L14.4001 21.375C14.3668 21.5583 14.2793 21.7083 14.1376 21.825C13.9959 21.9417 13.8334 22 13.6501 22ZM12.0001 15.25C12.9001 15.25 13.6668 14.9333 14.3001 14.3C14.9334 13.6667 15.2501 12.9 15.2501 12C15.2501 11.1 14.9334 10.3333 14.3001 9.7C13.6668 9.06667 12.9001 8.75 12.0001 8.75C11.1001 8.75 10.3334 9.06667 9.7001 9.7C9.06676 10.3333 8.7501 11.1 8.7501 12C8.7501 12.9 9.06676 13.6667 9.7001 14.3C10.3334 14.9333 11.1001 15.25 12.0001 15.25ZM12.0001 13.75C11.5168 13.75 11.1043 13.5792 10.7626 13.2375C10.4209 12.8958 10.2501 12.4833 10.2501 12C10.2501 11.5167 10.4209 11.1042 10.7626 10.7625C11.1043 10.4208 11.5168 10.25 12.0001 10.25C12.4834 10.25 12.8959 10.4208 13.2376 10.7625C13.5793 11.1042 13.7501 11.5167 13.7501 12C13.7501 12.4833 13.5793 12.8958 13.2376 13.2375C12.8959 13.5792 12.4834 13.75 12.0001 13.75ZM10.9001 20.5H13.1001L13.4501 17.7C14.0001 17.5667 14.5209 17.3583 15.0126 17.075C15.5043 16.7917 15.9501 16.45 16.3501 16.05L19.0001 17.2L20.0001 15.4L17.6501 13.675C17.7168 13.3917 17.7709 13.1125 17.8126 12.8375C17.8543 12.5625 17.8751 12.2833 17.8751 12C17.8751 11.7167 17.8584 11.4375 17.8251 11.1625C17.7918 10.8875 17.7334 10.6083 17.6501 10.325L20.0001 8.6L19.0001 6.8L16.3501 7.95C15.9668 7.51667 15.5334 7.15417 15.0501 6.8625C14.5668 6.57083 14.0334 6.38333 13.4501 6.3L13.1001 3.5H10.9001L10.5501 6.3C9.98343 6.41667 9.45426 6.61667 8.9626 6.9C8.47093 7.18333 8.03343 7.53333 7.6501 7.95L5.0001 6.8L4.0001 8.6L6.3501 10.325C6.28343 10.6083 6.22926 10.8875 6.1876 11.1625C6.14593 11.4375 6.1251 11.7167 6.1251 12C6.1251 12.2833 6.14593 12.5625 6.1876 12.8375C6.22926 13.1125 6.28343 13.3917 6.3501 13.675L4.0001 15.4L5.0001 17.2L7.6501 16.05C8.0501 16.45 8.49593 16.7917 8.9876 17.075C9.47926 17.3583 10.0001 17.5667 10.5501 17.7L10.9001 20.5Z" />
  </SvgIcon>
)

export const icons = {
  [Theme.LIGHT]: LightIcon,
  [Theme.DARK]: DarkIcon,
  [Theme.SYSTEM]: SystemIcon,
}
