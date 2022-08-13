import React from "react";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUris, setimageUris] = useState([]);

  const handleAdd = (uri) => {
    setimageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setimageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
