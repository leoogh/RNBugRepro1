#include <jni.h>
#include "react-native-calcturbo.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_calcturbo_CalcturboModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return calcturbo::multiply(a, b);
}
