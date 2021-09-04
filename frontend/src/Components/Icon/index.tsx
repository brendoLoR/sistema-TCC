import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
  name: string;
  size: number;
  color: string | '#111';
}

const Icon: React.FC<IconProps> = ({ name, size, color, ...props }) => {
  return (
    <FeatherIcon name={name} size={size} color={color} {...props} />
  )
}

export default Icon;
