import { type RootState } from '@redux/configure-store';
import { createSlice } from '@reduxjs/toolkit';

type SidePanelState = {
    isSidePanelOpen: boolean;
};

const initialState: SidePanelState = {
  isSidePanelOpen: false,
};

export const sidePanelSlice = createSlice({
    name: 'sidePanel',
    initialState,
    reducers: {
        openSidePanel: (state) => {
          state.isSidePanelOpen = true;
        },
        closeSidePanel: (state) => {
          state.isSidePanelOpen = false;
        },
        
    },
});

export const { openSidePanel, closeSidePanel } = sidePanelSlice.actions;
export const isSidePanelOpenSelector = (state: RootState) => state.sidePanel.isSidePanelOpen;
export const sidePanelReducer = sidePanelSlice.reducer;