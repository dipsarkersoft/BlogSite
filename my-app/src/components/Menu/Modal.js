import { Button, Modal } from 'antd';
import { useState } from 'react';



const ModalMenu = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className='ModalMenuDesign fixed-top sticky-top' type="primary" onClick={showModal}>
       LOGIN OR REGISTRATION
      </Button>
      <Modal
        open={open}
        title="LOGIN OR REGISTRATION"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
          key="submit"
          href="/registration"
          type="primary" loading={loading} onClick={handleOk}>
            REGISTRATION
          </Button>,
          <Button
            key="link"
            href="/login"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            LOGIN
          </Button>,
        ]}
      >
       
      </Modal>
    </>
  );
};
export default ModalMenu;