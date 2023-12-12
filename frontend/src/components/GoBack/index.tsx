import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return <S.ContainerGoBack onClick={handleGoBack}>Voltar</S.ContainerGoBack>;
}
