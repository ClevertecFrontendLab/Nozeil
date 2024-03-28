import { type UploadFile } from 'antd';

export type FormValues = {
    upload?: { file: UploadFile; fileList: UploadFile[] };
    firstName?: string;
    lastName?: string;
    birthday?: moment.Moment;
    email: string;
    password: string;
    'password-confirm': string;
};
