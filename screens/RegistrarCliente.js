import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


export default function RegistrarCliente({ route }) {

  const { guardarNuevo } = route.params;

  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');


  const navigation = useNavigation(); 

  const Guardar = () => {
    if (!cedula || !nombres) return null;

    
    const nuevoCliente = {
      cedula: cedula,
      nombres: nombres,
      apellidos: apellidos,
      fechanac: fechaNacimiento,
      sexo: sexo,
    };

    guardarNuevo(nuevoCliente);
    Alert.alert('Datos almacenados');
    setCedula('');
    setNombres('');
    setApellidos('');
    setFechaNacimiento('');
    setSexo('');

    navigation.goBack();
  };

  

  return (
    <View style={styles.contenedor}> 
    <Text style={styles.label}>Rejistro de Datos de clientes</Text>
      <Text style={styles.label}>Cédula:</Text>
      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={setCedula}
        placeholder="Ej: 365-130995-0002H"
      />

      <Text style={styles.label}>Nombres:</Text>
      <TextInput
        style={styles.input}
        value={nombres}
        onChangeText={setNombres}
        placeholder="Ej: Juan Carlos"
      />

      <Text style={styles.label}>Apellidos:</Text>
      <TextInput
        style={styles.input}
        value={apellidos}
        onChangeText={setApellidos}
        placeholder="Ej: Pérez López"
      />

      <Text style={styles.label}>Fecha de nacimiento:</Text>
      <TextInput
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Seleccione..." value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Femenino" value="Femenino" />
        </Picker>
      </View>

<View style={styles.botonSeparado}>
  <Button
    title="ListarClientes"
    onPress={Guardar}
    color="green"
  />
</View>


    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#e3f3e3',
    padding: 20,
  },
  
  

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  boton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tarjetaCliente: {
    backgroundColor: '#c6e8c6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textoCliente: {
    fontSize: 15,
    marginBottom: 3,
  },
  botonSeparado: {
  marginBottom: 15,
}

});
