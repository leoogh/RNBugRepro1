#ifdef __cplusplus
#import "react-native-calcturbo.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCalcturboSpec.h"

@interface Calcturbo : NativeCalcturboSpecBase <NativeCalcturboSpec>
//@interface Calcturbo : NSObject <NativeCalcturboSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Calcturbo : NSObject <RCTBridgeModule>
#endif

@end
