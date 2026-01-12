import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

// Типируем useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
