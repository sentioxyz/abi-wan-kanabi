export type { Config, DefaultConfig, ResolvedConfig } from './config'
import {
  Abi,
  Call,
  ContractFunctions,
  ContractViewFunctions,
  ContractFunctionsPopulateTransaction,
  ExtractAbiFunctionNames,
  ExtractAbiViewFunctionNames,
  FunctionArgs,
  FunctionRet,
} from './kanabi'

export { type Abi, EventToPrimitiveType, StringToPrimitiveType, ExtractAbiEvent, ExtractAbiStruct, ExtractAbiStructs, ExtractAbiEnum, ExtractAbiEnums } from './kanabi'

export function call<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi>,
>(
  abi: TAbi,
  f: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
): FunctionRet<TAbi, TFunctionName> {
  throw new Error('todo')
}

type TypedContractActions<TAbi extends Abi> = {
  call<TFunctionName extends ExtractAbiFunctionNames<TAbi>>(
    method: TFunctionName,
    args?: FunctionArgs<TAbi, TFunctionName>,
  ): Promise<FunctionRet<TAbi, TFunctionName>>
  populate<TFunctionName extends ExtractAbiFunctionNames<TAbi>>(
    method: TFunctionName,
    args?: FunctionArgs<TAbi, TFunctionName>,
  ): Call
  populateTransaction: ContractFunctionsPopulateTransaction<TAbi>
}

export type TypedContract<TAbi extends Abi> = TypedContractActions<TAbi> &
  ContractFunctions<TAbi>


export type TypedContractView<TAbi extends Abi> = ContractViewFunctions<TAbi> & {
  call<TFunctionName extends ExtractAbiViewFunctionNames<TAbi>>(
    method: TFunctionName,
    args?: FunctionArgs<TAbi, TFunctionName>,
  ): Promise<FunctionRet<TAbi, TFunctionName>>
}