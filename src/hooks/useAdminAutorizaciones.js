import {AdminContext} from '../context/AdminContext';
import { useContext } from 'react';

export const useAdminAutorizaciones = () => useContext(AdminContext);