import { ModalType } from "../../types/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { LogoutModal } from "../../base-component/ui/modals/logout-modal";
import { ShareModal } from "../../base-component/ui/modals/share-modal";

export const useModalManager = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(({ global: { modal } }) => modal);

  const closeModal = () => {
    dispatch(updateModalType({ type: ModalType.NONE }));
  };

  const MODAL_CONFIG = {
    [ModalType.LOGOUT]: <LogoutModal onClose={closeModal} />,

    [ModalType.SHARE_MODAL]: <ShareModal onClose={closeModal} />,
  };

  const renderModal = () => {
    return MODAL_CONFIG[type] || null;
  };

  return {
    renderModal,
  };
};
