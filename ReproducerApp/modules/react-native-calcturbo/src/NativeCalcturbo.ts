import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type {EventEmitter} from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  readonly onValueChanged: EventEmitter<number>
}

//export default TurboModuleRegistry.getEnforcing<Spec>('Calcturbo');
export default TurboModuleRegistry.get<Spec>("Calcturbo") as Spec | null;
