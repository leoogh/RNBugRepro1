package com.calcturbo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = CalcturboModule.NAME)
class CalcturboModule(reactContext: ReactApplicationContext) :
  NativeCalcturboSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun multiply(a: Double, b: Double): Double {
    val result = nativeMultiply(a, b)
    //emitOnValueChanged(result)
    return result
  }

  companion object {
    const val NAME = "Calcturbo"

    @JvmStatic private external fun nativeMultiply(a: Double, b: Double): Double

    init {
      System.loadLibrary("react-native-calcturbo");
    }

  }
}
