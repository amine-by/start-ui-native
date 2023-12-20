import { FC, PropsWithChildren } from 'react';
import { FlexProps, Flex, SafeAreaBox } from 'react-native-ficus-ui';

export const Container: FC<PropsWithChildren<FlexProps>> = ({
  children,
  ...rest
}) => {
  return (
    <SafeAreaBox flex={1}>
      <Flex {...rest}>{children}</Flex>
    </SafeAreaBox>
  );
};
