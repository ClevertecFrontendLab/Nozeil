import { type ReactNode } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { SidePanelHead } from '@components/side-panel-head/side-panel-head';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { trainingModalFormModeSelector } from '@redux/slices/training-modal/training-modal';

type CalendarSidePanelHeadProps = {
    onClose: () => void;
};

export const CalendarSidePanelHead = ({ onClose }: CalendarSidePanelHeadProps) => {
    const formMode = useAppSelector(trainingModalFormModeSelector);
    const content: { title: string; icon: ReactNode } = {
        title: 'Просмотр упражнений',
        icon: null,
    };

    if (formMode === 'new') {
        content.title = 'Добавление упражнений';
        content.icon = <PlusOutlined />;
    } else if (formMode === 'edit') {
        content.title = 'Редактирование';
        content.icon = <EditOutlined />;
    }

    return <SidePanelHead title={content.title} icon={content.icon} onClose={onClose} />;
};
