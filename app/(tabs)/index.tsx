import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  useColorScheme,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // 현재 모드를 감지
  const themeStyles = colorScheme === "dark" ? darkTheme : lightTheme;
  const handlePress = () => {
    console.log("버튼 클릭!");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/ai2.webp")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Qcraft</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">면접 준비의 첫걸음 AI와 함께</ThemedText>
        <ThemedText>
          입사 지원서를 토대로 AI가 예상 질문을 뽑아줍니다. 제출한 답변을 AI를
          통해 피드백을 받아보세요
        </ThemedText>
      </ThemedView>

      <TouchableOpacity
        style={[styles.startButton, themeStyles.startButton]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>지금 시작하기</Text>
      </TouchableOpacity>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">면접 준비 막막하셨나요?</ThemedText>
        <ThemedText>
          입사 지원서를 토대로 AI가 예상 질문을 뽑아줍니다.", "제출한 답변을
          AI를 통해 피드백을 받아보세요
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">서비스 이용 방법 이미지</ThemedText>
        <ThemedText>
          {
            "입사 지원서 업로드 -> AI 면접 예상 질문 생성 -> 답변 제출 -> AI피드백"
          }
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
  },
  startButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// 테마별 동적 스타일 정의
const lightTheme = StyleSheet.create({
  startButton: {
    backgroundColor: "#4CAF50",
  },
});

const darkTheme = StyleSheet.create({
  startButton: {
    backgroundColor: "#1D3D47",
  },
});
