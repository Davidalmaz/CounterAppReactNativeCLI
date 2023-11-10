/* eslint-disable prettier/prettier */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';
import {useState} from 'react';

const ButtonRedux = () => {
  const [amountToAdd, setAmountToAdd] = useState('');

  const handleIncrement = () => {
    // Parsea el valor ingresado a un número entero
    const parsedAmount = parseInt(amountToAdd, 10);

    // Verifica si es un número válido antes de despachar la acción
    if (!isNaN(parsedAmount)) {
      dispatch(incrementByAmount(parsedAmount));
    } else {
      // Manejar caso en el que el valor no es un número válido
      console.warn('Ingresa un número válido');
    }
  };

  const dispatch = useAppDispatch();
  return (
    <>
      {/* Boton incrementar */}
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <View>
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            Increment
          </Text>
        </View>
      </TouchableOpacity>

      {/* Boton decrementar */}
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <View>
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            Decrement
          </Text>
        </View>
      </TouchableOpacity>

      {/* Boton incrementar por monto */}
      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(10))}
        style={{
          backgroundColor: 'purple',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <View>
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            Add 10
          </Text>
        </View>
      </TouchableOpacity>

      {/* Boton decrementar por monto */}
      <TouchableOpacity
        onPress={() => dispatch(decrementByAmount(10))}
        style={{
          backgroundColor: 'orange',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <View>
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            Dec 10
          </Text>
        </View>
      </TouchableOpacity>

      {/* Componente de entrada de texto */}
      <TextInput
        placeholder="Ingrese la cantidad"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          margin: 10,
          borderRadius: 5,
        }}
        value={amountToAdd}
        onChangeText={text => setAmountToAdd(text)}
      />
      {/* Botón para agregar la cantidad */}
      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(parseInt(amountToAdd)))}
        disabled={!amountToAdd || isNaN(parseInt(amountToAdd, 10))}
        style={{
          backgroundColor: 'cyan',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
          Agregar Cantidad
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonRedux;
