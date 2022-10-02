import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { alertAtom } from 'state';

export { useAlertAction };

const useAlertAction = () => {
    const setAlert = useSetRecoilState(alertAtom);
    const resetAlert = useResetRecoilState(alertAtom);
    
    return{
        success: message => setAlert({ message, type: "alert-success" }),
        error: message => setAlert({ message, type: "alert-danger"}),
        clear: resetAlert
    }
}