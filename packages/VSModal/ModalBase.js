import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';
import ModalFooter from './ModalFooter';
import ModalContainer from './ModalContainer';
import ModalBody from './ModalBody';

export default function ModalBase(props) {
  const Header = props.header || null;

  return (
    <Modal
      visible={ props.visible }
      animationType={ 'none' }
      transparent
      hardwareAccelerated
      { ...props }
    >
      <ModalContainer>
        { Header }
        <ModalBody>
          { props.children }
        </ModalBody>
        <ModalFooter
          actionIcon={ props.actionIcon }
          closeAction={ props.closeAction }
          mainAction={ props.mainAction }
          mainActionText={ props.mainActionText }
          secondaryActionText={ props.secondaryActionText }
          { ...props.footer }
        />
      </ModalContainer>
    </Modal>
  );
}

ModalBase.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.any,
  actionIcon: PropTypes.func,
  mainAction: PropTypes.func,
  closeAction: PropTypes.func,
  mainActionText: PropTypes.string,
  secondaryActionText: PropTypes.string,
  header: PropTypes.object,
  footer: PropTypes.object,
};
