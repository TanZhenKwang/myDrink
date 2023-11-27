import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
  CheckBox,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// Replace with your product image
const productImage = require('./assets/boy.png');
Icon.loadFont();

// Custom component for Checkbox
const CustomCheckbox = ({ value, onValueChange, label }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox value={value} onValueChange={onValueChange} />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  );
};

// Custom component for Quantity Input
const QuantityInput = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={onDecrease}>
        <Icon name="minus" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrease}>
        <Icon name="plus" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

// Custom component for Additional Row
const AdditionalRow = ({ isAgreed2, onToggleSwitch }) => {
  return (
    <View style={styles.additionalRow}>
      {/* Points Indicator */}
      <View style={styles.pointsIndicator}>
        <Text style={styles.pointsText}>Points: 100</Text>
      </View>

      {/* ToggleSwitch */}
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isAgreed2 ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggleSwitch}
        value={isAgreed2}
      />
    </View>
  );
};

// Main component
const TopayScreen = () => {
  const navigation = useNavigation();

  // State variables
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isAgreed2, setIsAgreed2] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  // Calculated total price
  const totalPrice = 20.0 * quantity;

  // Functions
  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigateWithLeftSwipe = (screenName) => {
    setSelectedLink(screenName);
    navigation.navigate(screenName, { gestureDirection: 'horizontal-inverted' });
  };

  const goBackToProfileScreen = () => {
    navigation.navigate('Navigation');
  };

  const navigateToPaymentScreen = () => {
    navigation.navigate(paymentMethod + 'Screen');
  };

  const onToggleSwitch = () => setIsAgreed2(!isAgreed2);

  const navigateToCreditCardScreen = () => {
    navigation.navigate('CreditCardScreen');
  };

  const navigateToPaypalScreen = () => {
    navigation.navigate('PaypalScreen');
  };

  const navigateToShippingAddressForm = () => {
    navigation.navigate('ShippingAddressForm'); // Replace with the actual screen name
  };

  const navigateToCheckout = () => {
    // Check the payment method and navigate accordingly
    if (paymentMethod === 'Credit Card') {
      navigateToCreditCardScreen();
    } else {
      navigateToPaypalScreen();
    }
  };

  // JSX
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackToProfileScreen}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
        {/* Empty View to center the title */}
        <View />
      </View>

      {/* Navigation Links */}
      <View style={[styles.navigationLinks, styles.topNavigationLinks]}>
        <TouchableOpacity
          onPress={() => navigateWithLeftSwipe('TopayScreen')}
          style={[styles.navigationLink, selectedLink === 'TopayScreen' && styles.selectedLink]}
        >
          <Text style={styles.navigationLinkText}>To Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateWithLeftSwipe('WaitingSendScreen')}
          style={[
            styles.navigationLink,
            selectedLink === 'WaitingSendScreen' && styles.selectedLink,
          ]}
        >
          <Text style={styles.navigationLinkText}>Waiting Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateWithLeftSwipe('WaitingReceiveScreen')}
          style={[
            styles.navigationLink,
            selectedLink === 'WaitingReceiveScreen' && styles.selectedLink,
          ]}
        >
          <Text style={styles.navigationLinkText}>Waiting Receive</Text>
        </TouchableOpacity>
      </View>

      {/* Arrow Right Icon for Shipping Address Form */}
      <TouchableOpacity
        style={[styles.addressArrowContainer, styles.topAddressArrowContainer]}
        onPress={navigateToShippingAddressForm}
      >
        <View style={styles.shippingAddressContainer}>
          <Text style={styles.userNameText}>John Doe</Text>
          <Text style={styles.phoneNumberText}>123-456-7890</Text>
          <Text style={styles.userAddressText}>123 Main St, City, Country</Text>
        </View>
        <Icon name="arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Thematic Break */}
      <View style={styles.thematicBreak} />

      {/* Product Containers */}
      {[1, 2].map((item) => (
        <View key={item} style={styles.productContainer}>
          <View style={styles.productImageContainer}>
            <CustomCheckbox
              value={isAgreed}
              onValueChange={() => setIsAgreed(!isAgreed)}
              label="All"
            />
          </View>
          <View style={styles.productImageContainer}>
            <Image source={productImage} style={styles.productImage} />
          </View>

          <View style={styles.productDetails}>
            <Text style={styles.productName}>Product Name</Text>
            <Text style={styles.productPrice}>$20.00</Text>
            <Text style={styles.productQuantity}>Quantity:</Text>
            <QuantityInput
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          </View>
        </View>
      ))}

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TextInput style={styles.voucherInput} placeholder="Enter Voucher Code" />

          <Picker
            selectedValue={paymentMethod}
            style={styles.footerPaymentMethodPicker}
            onValueChange={(itemValue) => setPaymentMethod(itemValue)}
          >
            <Picker.Item label="Credit Card" value="Credit Card" />
            <Picker.Item label="PayPal" value="PayPal" />
          </Picker>

          {/* Additional Row with ToggleSwitch and Points Indicator */}
          <AdditionalRow isAgreed2={isAgreed2} onToggleSwitch={onToggleSwitch} />

          {/* Total and Checkout Button */}
          <View style={styles.totalContainer}>
            <CustomCheckbox
              value={isAgreed}
              onValueChange={() => setIsAgreed(!isAgreed)}
              label="All"
            />
            <Text style={styles.totalLabel}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={navigateToCheckout}>
              <Text style={styles.checkoutButtonText}>Checkout ({quantity})</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the title
  },
  topNavigationLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 25, // Add margin to separate from the title
  },
  navigationLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  navigationLink: {
    padding: 8,
  },
  topAddressArrowContainer: {
    marginVertical: 8, // Adjust this value as needed
    bottom: 100,
  },  
  addressArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    padding: 4,
    justifyContent: 'space-between',
  },
  addressArrowText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  thematicBreak: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 16,
    bottom: 120,
  },  
  selectedLink: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
  navigationLinkText: {
    fontSize: 16,
    color: '#000',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25, // Adjusted from `bottom` to `marginBottom`
    bottom: 100,
  },
  productImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  productDetails: {
    marginLeft: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  productQuantity: {
    fontSize: 16,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  footerContainer: {
    marginTop: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  footer: {},
  voucherInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  footerPaymentMethodPicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  onOffButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  onOffButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pointsIndicator: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 8,
  },
  pointsText: {
    fontSize: 16,
  },
});

export default TopayScreen;
