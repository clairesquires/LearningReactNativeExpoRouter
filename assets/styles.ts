import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#017BFE",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  whiteText: {
    color: "#ffffff",
  },
  listItem: {
    backgroundColor: "#f9c2ff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
  },
  flatList: {
    display: "flex",
    gap: 3,
  },
  overflowing: {
    fontSize: 20,
  },
});

export default styles;
