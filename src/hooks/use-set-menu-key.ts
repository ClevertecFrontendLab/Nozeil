import { useEffect } from 'react';
import { resetSelectedKeys, setSelectedKey } from '@redux/slices/nav-menu/nav-menu';
import { NavMenuSelectedKey } from '@typings/index';

import { useAppDispatch } from '.';

export const useSetMenuKey = (key: NavMenuSelectedKey) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setSelectedKey(key));

        return () => {
            dispatch(resetSelectedKeys());
        };
    }, [dispatch, key]);
};
