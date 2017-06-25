import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const Confirm = ({ children, visible, onAccept, onReject }) => {
  return (
      <Modal
        visible={visible}
        animationType={"slide"}
        transparent={false}
        onRequestClose={() => { } }>
          <View>
            <View>
              <Text>{ children }</Text>
            </View>
            <View>
              <Button onPress={onAccept} title="YES" text="YES" />
              <Button onPress={onReject} title="NO" text="NO" />
            </View>
          </View>
      </Modal>
  );
};

export { Confirm };
