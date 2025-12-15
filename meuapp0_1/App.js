import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function App() {
  const [tela, setTela] = useState("home");
  const [artistaSelecionado, setArtistaSelecionado] = useState(null);

  // ------------------ BARRA INFERIOR ------------------
  const BarraInferior = () => (
    <View style={styles.barraInferior}>
      <TouchableOpacity
        style={styles.botaoBarra}
        onPress={() => setTela("lista")}
      >
        <Text style={styles.textoBotaoBarra}>Atrações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoBarra}
        onPress={() => setTela("evento")}
      >
        <Text style={styles.textoBotaoBarra}>Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoBarra}
        onPress={() => setTela("sobre")}
      >
        <Text style={styles.textoBotaoBarra}>Sobre Nós</Text>
      </TouchableOpacity>
    </View>
  );

  // ------------------ LISTA DE ARTISTAS ------------------
  const artistas = [
    { id: "1", nome: "Banda 1", bio: "Biografia da Banda 1.", local: "Praça da Igreja Matriz. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "2", nome: "Banda 2", bio: "Biografia da Banda 2.", local: "Quadra Municipal. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "3", nome: "Banda 3", bio: "Biografia da Banda 3.", local: "Praça do Mercado. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "4", nome: "Banda 4", bio: "Biografia da Banda 4.", local: "Quadra Municipal. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "5", nome: "Banda 5", bio: "Biografia da Banda 5.", local: "Praça da Igreja Matriz. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "6", nome: "Banda 6", bio: "Biografia da Banda 6.", local: "Quadra Municipal. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "7", nome: "Banda 7", bio: "Biografia da Banda 7.", local: "Praça do Mercado. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
    { id: "8", nome: "Banda 8", bio: "Biografia da Banda 8.", local: "Quadra Municipal. Ops: a pessoa deverá clicar no nome da localização irá dirigi-la para um link no Google maps com a localização" },
  ];

  // ------------------ TELA INICIAL ------------------
  if (tela === "home") {
    return (
      <TouchableOpacity
        style={styles.homeContainer}
        onPress={() => setTela("lista")}
      >
        <View style={styles.homeOverlay}>
          <Text style={styles.eventName}>Festival de Inverno</Text>
          <Text style={styles.clickText}>Clique em qualquer lugar...</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // ------------------ TELA DA LISTA ------------------
  if (tela === "lista") {
    return (
      <View style={styles.telaBase}>
        <View style={styles.listaContainer}>
          <Text style={styles.listaTitulo}>Atrações do Festival</Text>

          <FlatList
            data={artistas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  setArtistaSelecionado(item);
                  setTela("detalhes");
                }}
              >
                <View style={styles.cardImgPlaceholder} />
                <Text style={styles.cardNome}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <BarraInferior />
      </View>
    );
  }

  // ------------------ TELA DE DETALHES ------------------
  if (tela === "detalhes" && artistaSelecionado) {
    return (
      <View style={styles.telaBase}>
        <View style={styles.detalhesContainer}>
          <View style={styles.detalhesImgPlaceholder} />

          <Text style={styles.detalhesNome}>{artistaSelecionado.nome}</Text>
          <Text style={styles.detalhesBio}>{artistaSelecionado.bio}</Text>
          <Text style={styles.detalhesLocal}>
            📍 Local: {artistaSelecionado.local}
          </Text>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setTela("lista")}
          >
            <Text style={styles.botaoVoltarTexto}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <BarraInferior />
      </View>
    );
  }

  // ------------------ TELA SOBRE O EVENTO ------------------
  if (tela === "evento") {
    return (
      <View style={styles.telaBase}>
        <View style={styles.textoTelaPadrao}>
          <Text style={styles.tituloTelaPadrao}>Sobre o Evento</Text>
          <Text style={styles.textoTela}>
            O Festival de Inverno é um evento cultural que celebra música,
            arte, gastronomia e a cultura local. O objetivo é promover artistas
            da região e proporcionar momentos únicos ao público.
          </Text>
        </View>

        <BarraInferior />
      </View>
    );
  }

  // ------------------ TELA SOBRE NÓS ------------------
  if (tela === "sobre") {
    return (
      <View style={styles.telaBase}>
        <View style={styles.textoTelaPadrao}>
          <Text style={styles.tituloTelaPadrao}>Sobre Nós</Text>
          <Text style={styles.textoTela}>
            Somos a equipe organizadora do Festival de Inverno.
            Trabalhamos para entregar uma experiência completa
            e dar visibilidade aos artistas locais.
          </Text>
        </View>

        <BarraInferior />
      </View>
    );
  }

  return null;
}

// ------------------ ESTILOS ------------------
const styles = StyleSheet.create({
  telaBase: {
    flex: 1,
    backgroundColor: "#111",
    paddingBottom: 60, 
  },

  // HOME
  homeContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  homeOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  clickText: {
    fontSize: 18,
    color: "#aaa",
  },

  // LISTA
  listaContainer: {
    flex: 1,
    padding: 20,
  },
  listaTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#222",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardImgPlaceholder: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginRight: 15,
  },
  cardNome: {
    fontSize: 20,
    color: "#fff",
  },

  // DETALHES
  detalhesContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  detalhesImgPlaceholder: {
    width: "100%",
    height: 220,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 20,
  },
  detalhesNome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  detalhesBio: {
    fontSize: 18,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 15,
  },
  detalhesLocal: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 40,
  },
  botaoVoltar: {
    backgroundColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  botaoVoltarTexto: {
    color: "#fff",
    fontSize: 18,
  },

  // TELA EVENTO / SOBRE
  textoTelaPadrao: {
    flex: 1,
    padding: 20,
  },
  tituloTelaPadrao: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  textoTela: {
    fontSize: 18,
    color: "#ccc",
    marginTop: 15,
  },

  // BARRA INFERIOR
  barraInferior: {
    height: 55,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  botaoBarra: {
    padding: 10,
  },
  textoBotaoBarra: {
    color: "#fff",
    fontSize: 16,
  },
});
