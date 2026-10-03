import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { findWinner } from "./game";

const EMPTY = Array(9).fill(null);

export default function App() {
  const [cells, setCells] = useState(EMPTY);
  const [xNext, setXNext] = useState(true);
  const { mark: winner, line } = findWinner(cells);
  const full = cells.every(Boolean);

  const tap = (i) => {
    if (cells[i] || winner) return;
    const next = [...cells];
    next[i] = xNext ? "X" : "O";
    setCells(next);
    setXNext(!xNext);
  };

  const status = winner ? `${winner} thắng rồi! 🎉` : full ? "Hoà nhau 🤝" : `Tới lượt ${xNext ? "X" : "O"}`;

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Text style={styles.title}>XO vui vẻ</Text>
      <Text style={styles.status}>{status}</Text>

      <View style={styles.grid}>
        {cells.map((cell, i) => (
          <Pressable
            key={i}
            style={[styles.cell, line.includes(i) && styles.cellWin]}
            onPress={() => tap(i)}
          >
            <Text style={[styles.mark, cell === "O" && styles.markO]}>{cell ?? ""}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.reset} onPress={() => { setCells(EMPTY); setXNext(true); }}>
        <Text style={styles.resetText}>Chơi lại</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#14121f", alignItems: "center", justifyContent: "center", gap: 18 },
  title: { color: "#fff", fontSize: 34, fontWeight: "800" },
  status: { color: "#b9b4d0", fontSize: 18 },
  grid: { width: 306, flexDirection: "row", flexWrap: "wrap", gap: 6 },
  cell: { width: 96, height: 96, borderRadius: 18, backgroundColor: "#241f38", alignItems: "center", justifyContent: "center" },
  cellWin: { backgroundColor: "#3d7a4f" },
  mark: { fontSize: 52, fontWeight: "800", color: "#ffd166" },
  markO: { color: "#7ad0ff" },
  reset: { paddingHorizontal: 26, paddingVertical: 12, borderRadius: 999, backgroundColor: "#4b3fa7" },
  resetText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
