import { useNetworkState } from '@uidotdev/usehooks';
import * as React from 'react';

export const NetworkStatusIndicator = () => {
  const { online: isOnline } = useNetworkState();
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    isOnline ? alert('You are back online!') : alert('You are currently offline');
  }, [close, isOnline]);

  return null;
};
