import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return { navigateBack, navigate };
}
