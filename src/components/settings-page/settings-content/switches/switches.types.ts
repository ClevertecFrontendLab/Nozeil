import { type SwitchProps } from 'antd';

export type SwitchFieldProps = {
    text: string;
    tooltip: string;
    maxWidth: number;
    defaultChecked?: boolean;
    disabled?: boolean;
    switchTestId?: string;
    tooltipIconTestId?: string;
    onChange?: SwitchProps['onChange'];
};

export type FieldsData = Array<
    {
        id: number;
    } & SwitchFieldProps
>;
