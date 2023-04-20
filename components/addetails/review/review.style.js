import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  recordMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 20,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
  recordBtn: {
    width: 150,
    borderRadius: 100,
    height: 150,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  recordBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  }
});

export default styles;
