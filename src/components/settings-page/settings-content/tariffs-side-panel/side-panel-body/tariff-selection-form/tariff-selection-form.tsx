import { useState } from 'react';
import { Flex } from '@components/flex/flex';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { closeSidePanel } from '@redux/slices/side-panel';
import { enableTariffsSubmit, openTariffsSuccessModal } from '@redux/slices/tariffs';
import { useGetTariffListQuery } from '@services/endpoints/catalogs';
import { useBuyTariffMutation } from '@services/endpoints/tariff';
import { type RadioChangeEvent, Form, Radio } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { FORM_NAME } from '../../tariffs-side-panel.constants';

import { RadioItem } from './radio-item/radio-item';
import { type FormValues } from './tariff-selection-form.types';

import styles from '../side-panel-body.module.css';

export const TariffSelectionForm = () => {
    const [radioValue, setRadioValue] = useState(0);
    const dispatch = useAppDispatch();

    const { data: tariffList } = useGetTariffListQuery();
    const [buyTariff] = useBuyTariffMutation();

    const onFinish = async ({ days }: FormValues) => {
        const tariffId = tariffList?.at(0)?._id;

        dispatch(openTariffsSuccessModal());
        dispatch(closeSidePanel());

        if (tariffId) {
            const body = {
                days,
                tariffId,
            };

            try {
                await buyTariff(body).unwrap();
            } catch (e) {
                console.error(e);
            }
        }
    };

    const onChange = (e: RadioChangeEvent) => {
        dispatch(enableTariffsSubmit());
        setRadioValue(e.target.value);
    };

    return (
        tariffList && (
            <Form name={FORM_NAME} onFinish={onFinish}>
                <Form.Item name='days' noStyle={true}>
                    <Radio.Group
                        className={styles.radioGroup}
                        value={radioValue}
                        onChange={onChange}
                    >
                        <Flex
                            className={styles.tariffSelectionList}
                            direction='column'
                            gap={{ xs: 'gap4', sm: 'gap16' }}
                        >
                            {tariffList.at(0)?.periods.map(({ text, cost, days }) => (
                                <RadioItem key={uuidv4()} text={text} cost={cost} days={days} />
                            ))}
                        </Flex>
                    </Radio.Group>
                </Form.Item>
            </Form>
        )
    );
};
