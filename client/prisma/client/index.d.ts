
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model competition
 * 
 */
export type competition = $Result.DefaultSelection<Prisma.$competitionPayload>
/**
 * Model days
 * 
 */
export type days = $Result.DefaultSelection<Prisma.$daysPayload>
/**
 * Model headings
 * 
 */
export type headings = $Result.DefaultSelection<Prisma.$headingsPayload>
/**
 * Model stocks
 * 
 */
export type stocks = $Result.DefaultSelection<Prisma.$stocksPayload>
/**
 * Model stocks_headings
 * 
 */
export type stocks_headings = $Result.DefaultSelection<Prisma.$stocks_headingsPayload>
/**
 * Model stocks_users
 * 
 */
export type stocks_users = $Result.DefaultSelection<Prisma.$stocks_usersPayload>
/**
 * Model timer
 * 
 */
export type timer = $Result.DefaultSelection<Prisma.$timerPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Competitions
 * const competitions = await prisma.competition.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Competitions
   * const competitions = await prisma.competition.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.competition`: Exposes CRUD operations for the **competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.competitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.days`: Exposes CRUD operations for the **days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.days.findMany()
    * ```
    */
  get days(): Prisma.daysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headings`: Exposes CRUD operations for the **headings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headings
    * const headings = await prisma.headings.findMany()
    * ```
    */
  get headings(): Prisma.headingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks`: Exposes CRUD operations for the **stocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stocks.findMany()
    * ```
    */
  get stocks(): Prisma.stocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks_headings`: Exposes CRUD operations for the **stocks_headings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks_headings
    * const stocks_headings = await prisma.stocks_headings.findMany()
    * ```
    */
  get stocks_headings(): Prisma.stocks_headingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks_users`: Exposes CRUD operations for the **stocks_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks_users
    * const stocks_users = await prisma.stocks_users.findMany()
    * ```
    */
  get stocks_users(): Prisma.stocks_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timer`: Exposes CRUD operations for the **timer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timers
    * const timers = await prisma.timer.findMany()
    * ```
    */
  get timer(): Prisma.timerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    competition: 'competition',
    days: 'days',
    headings: 'headings',
    stocks: 'stocks',
    stocks_headings: 'stocks_headings',
    stocks_users: 'stocks_users',
    timer: 'timer',
    users: 'users',
    session: 'session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "competition" | "days" | "headings" | "stocks" | "stocks_headings" | "stocks_users" | "timer" | "users" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      competition: {
        payload: Prisma.$competitionPayload<ExtArgs>
        fields: Prisma.competitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findFirst: {
            args: Prisma.competitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findMany: {
            args: Prisma.competitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          create: {
            args: Prisma.competitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          createMany: {
            args: Prisma.competitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.competitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          delete: {
            args: Prisma.competitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          update: {
            args: Prisma.competitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          deleteMany: {
            args: Prisma.competitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.competitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          upsert: {
            args: Prisma.competitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.competitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.competitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      days: {
        payload: Prisma.$daysPayload<ExtArgs>
        fields: Prisma.daysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          findFirst: {
            args: Prisma.daysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          findMany: {
            args: Prisma.daysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          create: {
            args: Prisma.daysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          createMany: {
            args: Prisma.daysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.daysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          delete: {
            args: Prisma.daysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          update: {
            args: Prisma.daysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          deleteMany: {
            args: Prisma.daysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.daysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          upsert: {
            args: Prisma.daysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          aggregate: {
            args: Prisma.DaysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDays>
          }
          groupBy: {
            args: Prisma.daysGroupByArgs<ExtArgs>
            result: $Utils.Optional<DaysGroupByOutputType>[]
          }
          count: {
            args: Prisma.daysCountArgs<ExtArgs>
            result: $Utils.Optional<DaysCountAggregateOutputType> | number
          }
        }
      }
      headings: {
        payload: Prisma.$headingsPayload<ExtArgs>
        fields: Prisma.headingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.headingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.headingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          findFirst: {
            args: Prisma.headingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.headingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          findMany: {
            args: Prisma.headingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>[]
          }
          create: {
            args: Prisma.headingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          createMany: {
            args: Prisma.headingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.headingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>[]
          }
          delete: {
            args: Prisma.headingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          update: {
            args: Prisma.headingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          deleteMany: {
            args: Prisma.headingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.headingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.headingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>[]
          }
          upsert: {
            args: Prisma.headingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$headingsPayload>
          }
          aggregate: {
            args: Prisma.HeadingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadings>
          }
          groupBy: {
            args: Prisma.headingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.headingsCountArgs<ExtArgs>
            result: $Utils.Optional<HeadingsCountAggregateOutputType> | number
          }
        }
      }
      stocks: {
        payload: Prisma.$stocksPayload<ExtArgs>
        fields: Prisma.stocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findFirst: {
            args: Prisma.stocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findMany: {
            args: Prisma.stocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          create: {
            args: Prisma.stocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          createMany: {
            args: Prisma.stocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stocksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          delete: {
            args: Prisma.stocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          update: {
            args: Prisma.stocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          deleteMany: {
            args: Prisma.stocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stocksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          upsert: {
            args: Prisma.stocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          aggregate: {
            args: Prisma.StocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks>
          }
          groupBy: {
            args: Prisma.stocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.stocksCountArgs<ExtArgs>
            result: $Utils.Optional<StocksCountAggregateOutputType> | number
          }
        }
      }
      stocks_headings: {
        payload: Prisma.$stocks_headingsPayload<ExtArgs>
        fields: Prisma.stocks_headingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stocks_headingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stocks_headingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          findFirst: {
            args: Prisma.stocks_headingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stocks_headingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          findMany: {
            args: Prisma.stocks_headingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>[]
          }
          create: {
            args: Prisma.stocks_headingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          createMany: {
            args: Prisma.stocks_headingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stocks_headingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>[]
          }
          delete: {
            args: Prisma.stocks_headingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          update: {
            args: Prisma.stocks_headingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          deleteMany: {
            args: Prisma.stocks_headingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stocks_headingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stocks_headingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>[]
          }
          upsert: {
            args: Prisma.stocks_headingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_headingsPayload>
          }
          aggregate: {
            args: Prisma.Stocks_headingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks_headings>
          }
          groupBy: {
            args: Prisma.stocks_headingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stocks_headingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stocks_headingsCountArgs<ExtArgs>
            result: $Utils.Optional<Stocks_headingsCountAggregateOutputType> | number
          }
        }
      }
      stocks_users: {
        payload: Prisma.$stocks_usersPayload<ExtArgs>
        fields: Prisma.stocks_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stocks_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stocks_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          findFirst: {
            args: Prisma.stocks_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stocks_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          findMany: {
            args: Prisma.stocks_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>[]
          }
          create: {
            args: Prisma.stocks_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          createMany: {
            args: Prisma.stocks_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stocks_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>[]
          }
          delete: {
            args: Prisma.stocks_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          update: {
            args: Prisma.stocks_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          deleteMany: {
            args: Prisma.stocks_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stocks_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stocks_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>[]
          }
          upsert: {
            args: Prisma.stocks_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocks_usersPayload>
          }
          aggregate: {
            args: Prisma.Stocks_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks_users>
          }
          groupBy: {
            args: Prisma.stocks_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stocks_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.stocks_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Stocks_usersCountAggregateOutputType> | number
          }
        }
      }
      timer: {
        payload: Prisma.$timerPayload<ExtArgs>
        fields: Prisma.timerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          findFirst: {
            args: Prisma.timerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          findMany: {
            args: Prisma.timerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>[]
          }
          create: {
            args: Prisma.timerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          createMany: {
            args: Prisma.timerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.timerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>[]
          }
          delete: {
            args: Prisma.timerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          update: {
            args: Prisma.timerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          deleteMany: {
            args: Prisma.timerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.timerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>[]
          }
          upsert: {
            args: Prisma.timerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timerPayload>
          }
          aggregate: {
            args: Prisma.TimerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimer>
          }
          groupBy: {
            args: Prisma.timerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimerGroupByOutputType>[]
          }
          count: {
            args: Prisma.timerCountArgs<ExtArgs>
            result: $Utils.Optional<TimerCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    competition?: competitionOmit
    days?: daysOmit
    headings?: headingsOmit
    stocks?: stocksOmit
    stocks_headings?: stocks_headingsOmit
    stocks_users?: stocks_usersOmit
    timer?: timerOmit
    users?: usersOmit
    session?: sessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    session: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | UsersCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionMinAggregateOutputType = {
    active: boolean | null
    created: string | null
    id: string | null
    pause: boolean | null
    updated: string | null
    ended: boolean | null
  }

  export type CompetitionMaxAggregateOutputType = {
    active: boolean | null
    created: string | null
    id: string | null
    pause: boolean | null
    updated: string | null
    ended: boolean | null
  }

  export type CompetitionCountAggregateOutputType = {
    active: number
    created: number
    id: number
    pause: number
    updated: number
    ended: number
    _all: number
  }


  export type CompetitionMinAggregateInputType = {
    active?: true
    created?: true
    id?: true
    pause?: true
    updated?: true
    ended?: true
  }

  export type CompetitionMaxAggregateInputType = {
    active?: true
    created?: true
    id?: true
    pause?: true
    updated?: true
    ended?: true
  }

  export type CompetitionCountAggregateInputType = {
    active?: true
    created?: true
    id?: true
    pause?: true
    updated?: true
    ended?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition to aggregate.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type competitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competitionWhereInput
    orderBy?: competitionOrderByWithAggregationInput | competitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: competitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    active: boolean
    created: string
    id: string
    pause: boolean
    updated: string
    ended: boolean
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends competitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type competitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    created?: boolean
    id?: boolean
    pause?: boolean
    updated?: boolean
    ended?: boolean
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    created?: boolean
    id?: boolean
    pause?: boolean
    updated?: boolean
    ended?: boolean
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    created?: boolean
    id?: boolean
    pause?: boolean
    updated?: boolean
    ended?: boolean
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectScalar = {
    active?: boolean
    created?: boolean
    id?: boolean
    pause?: boolean
    updated?: boolean
    ended?: boolean
  }

  export type competitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"active" | "created" | "id" | "pause" | "updated" | "ended", ExtArgs["result"]["competition"]>

  export type $competitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      active: boolean
      created: string
      id: string
      pause: boolean
      updated: string
      ended: boolean
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type competitionGetPayload<S extends boolean | null | undefined | competitionDefaultArgs> = $Result.GetResult<Prisma.$competitionPayload, S>

  type competitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface competitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition'], meta: { name: 'competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {competitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competitionFindUniqueArgs>(args: SelectSubset<T, competitionFindUniqueArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competitionFindUniqueOrThrowArgs>(args: SelectSubset<T, competitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competitionFindFirstArgs>(args?: SelectSubset<T, competitionFindFirstArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competitionFindFirstOrThrowArgs>(args?: SelectSubset<T, competitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `active`
     * const competitionWithActiveOnly = await prisma.competition.findMany({ select: { active: true } })
     * 
     */
    findMany<T extends competitionFindManyArgs>(args?: SelectSubset<T, competitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Competition.
     * @param {competitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends competitionCreateArgs>(args: SelectSubset<T, competitionCreateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Competitions.
     * @param {competitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competitionCreateManyArgs>(args?: SelectSubset<T, competitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {competitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `active`
     * const competitionWithActiveOnly = await prisma.competition.createManyAndReturn({
     *   select: { active: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends competitionCreateManyAndReturnArgs>(args?: SelectSubset<T, competitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Competition.
     * @param {competitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends competitionDeleteArgs>(args: SelectSubset<T, competitionDeleteArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Competition.
     * @param {competitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competitionUpdateArgs>(args: SelectSubset<T, competitionUpdateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Competitions.
     * @param {competitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competitionDeleteManyArgs>(args?: SelectSubset<T, competitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competitionUpdateManyArgs>(args: SelectSubset<T, competitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {competitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `active`
     * const competitionWithActiveOnly = await prisma.competition.updateManyAndReturn({
     *   select: { active: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends competitionUpdateManyAndReturnArgs>(args: SelectSubset<T, competitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Competition.
     * @param {competitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends competitionUpsertArgs>(args: SelectSubset<T, competitionUpsertArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends competitionCountArgs>(
      args?: Subset<T, competitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competitionGroupByArgs['orderBy'] }
        : { orderBy?: competitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition model
   */
  readonly fields: competitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition model
   */ 
  interface competitionFieldRefs {
    readonly active: FieldRef<"competition", 'Boolean'>
    readonly created: FieldRef<"competition", 'String'>
    readonly id: FieldRef<"competition", 'String'>
    readonly pause: FieldRef<"competition", 'Boolean'>
    readonly updated: FieldRef<"competition", 'String'>
    readonly ended: FieldRef<"competition", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * competition findUnique
   */
  export type competitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findUniqueOrThrow
   */
  export type competitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findFirst
   */
  export type competitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findFirstOrThrow
   */
  export type competitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findMany
   */
  export type competitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter, which competitions to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition create
   */
  export type competitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data needed to create a competition.
     */
    data?: XOR<competitionCreateInput, competitionUncheckedCreateInput>
  }

  /**
   * competition createMany
   */
  export type competitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competitions.
     */
    data: competitionCreateManyInput | competitionCreateManyInput[]
  }

  /**
   * competition createManyAndReturn
   */
  export type competitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data used to create many competitions.
     */
    data: competitionCreateManyInput | competitionCreateManyInput[]
  }

  /**
   * competition update
   */
  export type competitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data needed to update a competition.
     */
    data: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
    /**
     * Choose, which competition to update.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition updateMany
   */
  export type competitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competitions.
     */
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyInput>
    /**
     * Filter which competitions to update
     */
    where?: competitionWhereInput
  }

  /**
   * competition updateManyAndReturn
   */
  export type competitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data used to update competitions.
     */
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyInput>
    /**
     * Filter which competitions to update
     */
    where?: competitionWhereInput
  }

  /**
   * competition upsert
   */
  export type competitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The filter to search for the competition to update in case it exists.
     */
    where: competitionWhereUniqueInput
    /**
     * In case the competition found by the `where` argument doesn't exist, create a new competition with this data.
     */
    create: XOR<competitionCreateInput, competitionUncheckedCreateInput>
    /**
     * In case the competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
  }

  /**
   * competition delete
   */
  export type competitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Filter which competition to delete.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition deleteMany
   */
  export type competitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competitions to delete
     */
    where?: competitionWhereInput
  }

  /**
   * competition without action
   */
  export type competitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
  }


  /**
   * Model days
   */

  export type AggregateDays = {
    _count: DaysCountAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  export type DaysMinAggregateOutputType = {
    created: string | null
    description: string | null
    id: string | null
    name: string | null
    updated: string | null
    active: boolean | null
  }

  export type DaysMaxAggregateOutputType = {
    created: string | null
    description: string | null
    id: string | null
    name: string | null
    updated: string | null
    active: boolean | null
  }

  export type DaysCountAggregateOutputType = {
    created: number
    description: number
    id: number
    name: number
    updated: number
    active: number
    _all: number
  }


  export type DaysMinAggregateInputType = {
    created?: true
    description?: true
    id?: true
    name?: true
    updated?: true
    active?: true
  }

  export type DaysMaxAggregateInputType = {
    created?: true
    description?: true
    id?: true
    name?: true
    updated?: true
    active?: true
  }

  export type DaysCountAggregateInputType = {
    created?: true
    description?: true
    id?: true
    name?: true
    updated?: true
    active?: true
    _all?: true
  }

  export type DaysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which days to aggregate.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned days
    **/
    _count?: true | DaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaysMaxAggregateInputType
  }

  export type GetDaysAggregateType<T extends DaysAggregateArgs> = {
        [P in keyof T & keyof AggregateDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDays[P]>
      : GetScalarType<T[P], AggregateDays[P]>
  }




  export type daysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daysWhereInput
    orderBy?: daysOrderByWithAggregationInput | daysOrderByWithAggregationInput[]
    by: DaysScalarFieldEnum[] | DaysScalarFieldEnum
    having?: daysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaysCountAggregateInputType | true
    _min?: DaysMinAggregateInputType
    _max?: DaysMaxAggregateInputType
  }

  export type DaysGroupByOutputType = {
    created: string
    description: string
    id: string
    name: string
    updated: string
    active: boolean
    _count: DaysCountAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  type GetDaysGroupByPayload<T extends daysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaysGroupByOutputType[P]>
            : GetScalarType<T[P], DaysGroupByOutputType[P]>
        }
      >
    >


  export type daysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    description?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    active?: boolean
  }, ExtArgs["result"]["days"]>

  export type daysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    description?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    active?: boolean
  }, ExtArgs["result"]["days"]>

  export type daysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    description?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    active?: boolean
  }, ExtArgs["result"]["days"]>

  export type daysSelectScalar = {
    created?: boolean
    description?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    active?: boolean
  }

  export type daysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created" | "description" | "id" | "name" | "updated" | "active", ExtArgs["result"]["days"]>

  export type $daysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "days"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created: string
      description: string
      id: string
      name: string
      updated: string
      active: boolean
    }, ExtArgs["result"]["days"]>
    composites: {}
  }

  type daysGetPayload<S extends boolean | null | undefined | daysDefaultArgs> = $Result.GetResult<Prisma.$daysPayload, S>

  type daysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DaysCountAggregateInputType | true
    }

  export interface daysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['days'], meta: { name: 'days' } }
    /**
     * Find zero or one Days that matches the filter.
     * @param {daysFindUniqueArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daysFindUniqueArgs>(args: SelectSubset<T, daysFindUniqueArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Days that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {daysFindUniqueOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daysFindUniqueOrThrowArgs>(args: SelectSubset<T, daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindFirstArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daysFindFirstArgs>(args?: SelectSubset<T, daysFindFirstArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindFirstOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daysFindFirstOrThrowArgs>(args?: SelectSubset<T, daysFindFirstOrThrowArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.days.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.days.findMany({ take: 10 })
     * 
     * // Only select the `created`
     * const daysWithCreatedOnly = await prisma.days.findMany({ select: { created: true } })
     * 
     */
    findMany<T extends daysFindManyArgs>(args?: SelectSubset<T, daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Days.
     * @param {daysCreateArgs} args - Arguments to create a Days.
     * @example
     * // Create one Days
     * const Days = await prisma.days.create({
     *   data: {
     *     // ... data to create a Days
     *   }
     * })
     * 
     */
    create<T extends daysCreateArgs>(args: SelectSubset<T, daysCreateArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Days.
     * @param {daysCreateManyArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const days = await prisma.days.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daysCreateManyArgs>(args?: SelectSubset<T, daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Days and returns the data saved in the database.
     * @param {daysCreateManyAndReturnArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const days = await prisma.days.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Days and only return the `created`
     * const daysWithCreatedOnly = await prisma.days.createManyAndReturn({
     *   select: { created: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends daysCreateManyAndReturnArgs>(args?: SelectSubset<T, daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Days.
     * @param {daysDeleteArgs} args - Arguments to delete one Days.
     * @example
     * // Delete one Days
     * const Days = await prisma.days.delete({
     *   where: {
     *     // ... filter to delete one Days
     *   }
     * })
     * 
     */
    delete<T extends daysDeleteArgs>(args: SelectSubset<T, daysDeleteArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Days.
     * @param {daysUpdateArgs} args - Arguments to update one Days.
     * @example
     * // Update one Days
     * const days = await prisma.days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daysUpdateArgs>(args: SelectSubset<T, daysUpdateArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Days.
     * @param {daysDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daysDeleteManyArgs>(args?: SelectSubset<T, daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const days = await prisma.days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daysUpdateManyArgs>(args: SelectSubset<T, daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days and returns the data updated in the database.
     * @param {daysUpdateManyAndReturnArgs} args - Arguments to update many Days.
     * @example
     * // Update many Days
     * const days = await prisma.days.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Days and only return the `created`
     * const daysWithCreatedOnly = await prisma.days.updateManyAndReturn({
     *   select: { created: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends daysUpdateManyAndReturnArgs>(args: SelectSubset<T, daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Days.
     * @param {daysUpsertArgs} args - Arguments to update or create a Days.
     * @example
     * // Update or create a Days
     * const days = await prisma.days.upsert({
     *   create: {
     *     // ... data to create a Days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Days we want to update
     *   }
     * })
     */
    upsert<T extends daysUpsertArgs>(args: SelectSubset<T, daysUpsertArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.days.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends daysCountArgs>(
      args?: Subset<T, daysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DaysAggregateArgs>(args: Subset<T, DaysAggregateArgs>): Prisma.PrismaPromise<GetDaysAggregateType<T>>

    /**
     * Group by Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends daysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daysGroupByArgs['orderBy'] }
        : { orderBy?: daysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the days model
   */
  readonly fields: daysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the days model
   */ 
  interface daysFieldRefs {
    readonly created: FieldRef<"days", 'String'>
    readonly description: FieldRef<"days", 'String'>
    readonly id: FieldRef<"days", 'String'>
    readonly name: FieldRef<"days", 'String'>
    readonly updated: FieldRef<"days", 'String'>
    readonly active: FieldRef<"days", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * days findUnique
   */
  export type daysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days findUniqueOrThrow
   */
  export type daysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days findFirst
   */
  export type daysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days findFirstOrThrow
   */
  export type daysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days findMany
   */
  export type daysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days create
   */
  export type daysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data needed to create a days.
     */
    data?: XOR<daysCreateInput, daysUncheckedCreateInput>
  }

  /**
   * days createMany
   */
  export type daysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many days.
     */
    data: daysCreateManyInput | daysCreateManyInput[]
  }

  /**
   * days createManyAndReturn
   */
  export type daysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data used to create many days.
     */
    data: daysCreateManyInput | daysCreateManyInput[]
  }

  /**
   * days update
   */
  export type daysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data needed to update a days.
     */
    data: XOR<daysUpdateInput, daysUncheckedUpdateInput>
    /**
     * Choose, which days to update.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days updateMany
   */
  export type daysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update days.
     */
    data: XOR<daysUpdateManyMutationInput, daysUncheckedUpdateManyInput>
    /**
     * Filter which days to update
     */
    where?: daysWhereInput
  }

  /**
   * days updateManyAndReturn
   */
  export type daysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data used to update days.
     */
    data: XOR<daysUpdateManyMutationInput, daysUncheckedUpdateManyInput>
    /**
     * Filter which days to update
     */
    where?: daysWhereInput
  }

  /**
   * days upsert
   */
  export type daysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The filter to search for the days to update in case it exists.
     */
    where: daysWhereUniqueInput
    /**
     * In case the days found by the `where` argument doesn't exist, create a new days with this data.
     */
    create: XOR<daysCreateInput, daysUncheckedCreateInput>
    /**
     * In case the days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daysUpdateInput, daysUncheckedUpdateInput>
  }

  /**
   * days delete
   */
  export type daysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Filter which days to delete.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days deleteMany
   */
  export type daysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which days to delete
     */
    where?: daysWhereInput
  }

  /**
   * days without action
   */
  export type daysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
  }


  /**
   * Model headings
   */

  export type AggregateHeadings = {
    _count: HeadingsCountAggregateOutputType | null
    _avg: HeadingsAvgAggregateOutputType | null
    _sum: HeadingsSumAggregateOutputType | null
    _min: HeadingsMinAggregateOutputType | null
    _max: HeadingsMaxAggregateOutputType | null
  }

  export type HeadingsAvgAggregateOutputType = {
    heading_number: Decimal | null
  }

  export type HeadingsSumAggregateOutputType = {
    heading_number: Decimal | null
  }

  export type HeadingsMinAggregateOutputType = {
    created: string | null
    id: string | null
    name: string | null
    updated: string | null
    day: string | null
    active: boolean | null
    heading_number: Decimal | null
  }

  export type HeadingsMaxAggregateOutputType = {
    created: string | null
    id: string | null
    name: string | null
    updated: string | null
    day: string | null
    active: boolean | null
    heading_number: Decimal | null
  }

  export type HeadingsCountAggregateOutputType = {
    created: number
    id: number
    name: number
    updated: number
    day: number
    active: number
    heading_number: number
    _all: number
  }


  export type HeadingsAvgAggregateInputType = {
    heading_number?: true
  }

  export type HeadingsSumAggregateInputType = {
    heading_number?: true
  }

  export type HeadingsMinAggregateInputType = {
    created?: true
    id?: true
    name?: true
    updated?: true
    day?: true
    active?: true
    heading_number?: true
  }

  export type HeadingsMaxAggregateInputType = {
    created?: true
    id?: true
    name?: true
    updated?: true
    day?: true
    active?: true
    heading_number?: true
  }

  export type HeadingsCountAggregateInputType = {
    created?: true
    id?: true
    name?: true
    updated?: true
    day?: true
    active?: true
    heading_number?: true
    _all?: true
  }

  export type HeadingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which headings to aggregate.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned headings
    **/
    _count?: true | HeadingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadingsMaxAggregateInputType
  }

  export type GetHeadingsAggregateType<T extends HeadingsAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadings[P]>
      : GetScalarType<T[P], AggregateHeadings[P]>
  }




  export type headingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: headingsWhereInput
    orderBy?: headingsOrderByWithAggregationInput | headingsOrderByWithAggregationInput[]
    by: HeadingsScalarFieldEnum[] | HeadingsScalarFieldEnum
    having?: headingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadingsCountAggregateInputType | true
    _avg?: HeadingsAvgAggregateInputType
    _sum?: HeadingsSumAggregateInputType
    _min?: HeadingsMinAggregateInputType
    _max?: HeadingsMaxAggregateInputType
  }

  export type HeadingsGroupByOutputType = {
    created: string
    id: string
    name: string
    updated: string
    day: string
    active: boolean
    heading_number: Decimal
    _count: HeadingsCountAggregateOutputType | null
    _avg: HeadingsAvgAggregateOutputType | null
    _sum: HeadingsSumAggregateOutputType | null
    _min: HeadingsMinAggregateOutputType | null
    _max: HeadingsMaxAggregateOutputType | null
  }

  type GetHeadingsGroupByPayload<T extends headingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadingsGroupByOutputType[P]>
            : GetScalarType<T[P], HeadingsGroupByOutputType[P]>
        }
      >
    >


  export type headingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    day?: boolean
    active?: boolean
    heading_number?: boolean
  }, ExtArgs["result"]["headings"]>

  export type headingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    day?: boolean
    active?: boolean
    heading_number?: boolean
  }, ExtArgs["result"]["headings"]>

  export type headingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    day?: boolean
    active?: boolean
    heading_number?: boolean
  }, ExtArgs["result"]["headings"]>

  export type headingsSelectScalar = {
    created?: boolean
    id?: boolean
    name?: boolean
    updated?: boolean
    day?: boolean
    active?: boolean
    heading_number?: boolean
  }

  export type headingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created" | "id" | "name" | "updated" | "day" | "active" | "heading_number", ExtArgs["result"]["headings"]>

  export type $headingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "headings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created: string
      id: string
      name: string
      updated: string
      day: string
      active: boolean
      heading_number: Prisma.Decimal
    }, ExtArgs["result"]["headings"]>
    composites: {}
  }

  type headingsGetPayload<S extends boolean | null | undefined | headingsDefaultArgs> = $Result.GetResult<Prisma.$headingsPayload, S>

  type headingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<headingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadingsCountAggregateInputType | true
    }

  export interface headingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['headings'], meta: { name: 'headings' } }
    /**
     * Find zero or one Headings that matches the filter.
     * @param {headingsFindUniqueArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends headingsFindUniqueArgs>(args: SelectSubset<T, headingsFindUniqueArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Headings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {headingsFindUniqueOrThrowArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends headingsFindUniqueOrThrowArgs>(args: SelectSubset<T, headingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindFirstArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends headingsFindFirstArgs>(args?: SelectSubset<T, headingsFindFirstArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Headings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindFirstOrThrowArgs} args - Arguments to find a Headings
     * @example
     * // Get one Headings
     * const headings = await prisma.headings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends headingsFindFirstOrThrowArgs>(args?: SelectSubset<T, headingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headings
     * const headings = await prisma.headings.findMany()
     * 
     * // Get first 10 Headings
     * const headings = await prisma.headings.findMany({ take: 10 })
     * 
     * // Only select the `created`
     * const headingsWithCreatedOnly = await prisma.headings.findMany({ select: { created: true } })
     * 
     */
    findMany<T extends headingsFindManyArgs>(args?: SelectSubset<T, headingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Headings.
     * @param {headingsCreateArgs} args - Arguments to create a Headings.
     * @example
     * // Create one Headings
     * const Headings = await prisma.headings.create({
     *   data: {
     *     // ... data to create a Headings
     *   }
     * })
     * 
     */
    create<T extends headingsCreateArgs>(args: SelectSubset<T, headingsCreateArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Headings.
     * @param {headingsCreateManyArgs} args - Arguments to create many Headings.
     * @example
     * // Create many Headings
     * const headings = await prisma.headings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends headingsCreateManyArgs>(args?: SelectSubset<T, headingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Headings and returns the data saved in the database.
     * @param {headingsCreateManyAndReturnArgs} args - Arguments to create many Headings.
     * @example
     * // Create many Headings
     * const headings = await prisma.headings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Headings and only return the `created`
     * const headingsWithCreatedOnly = await prisma.headings.createManyAndReturn({
     *   select: { created: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends headingsCreateManyAndReturnArgs>(args?: SelectSubset<T, headingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Headings.
     * @param {headingsDeleteArgs} args - Arguments to delete one Headings.
     * @example
     * // Delete one Headings
     * const Headings = await prisma.headings.delete({
     *   where: {
     *     // ... filter to delete one Headings
     *   }
     * })
     * 
     */
    delete<T extends headingsDeleteArgs>(args: SelectSubset<T, headingsDeleteArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Headings.
     * @param {headingsUpdateArgs} args - Arguments to update one Headings.
     * @example
     * // Update one Headings
     * const headings = await prisma.headings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends headingsUpdateArgs>(args: SelectSubset<T, headingsUpdateArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Headings.
     * @param {headingsDeleteManyArgs} args - Arguments to filter Headings to delete.
     * @example
     * // Delete a few Headings
     * const { count } = await prisma.headings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends headingsDeleteManyArgs>(args?: SelectSubset<T, headingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headings
     * const headings = await prisma.headings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends headingsUpdateManyArgs>(args: SelectSubset<T, headingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headings and returns the data updated in the database.
     * @param {headingsUpdateManyAndReturnArgs} args - Arguments to update many Headings.
     * @example
     * // Update many Headings
     * const headings = await prisma.headings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Headings and only return the `created`
     * const headingsWithCreatedOnly = await prisma.headings.updateManyAndReturn({
     *   select: { created: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends headingsUpdateManyAndReturnArgs>(args: SelectSubset<T, headingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Headings.
     * @param {headingsUpsertArgs} args - Arguments to update or create a Headings.
     * @example
     * // Update or create a Headings
     * const headings = await prisma.headings.upsert({
     *   create: {
     *     // ... data to create a Headings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Headings we want to update
     *   }
     * })
     */
    upsert<T extends headingsUpsertArgs>(args: SelectSubset<T, headingsUpsertArgs<ExtArgs>>): Prisma__headingsClient<$Result.GetResult<Prisma.$headingsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsCountArgs} args - Arguments to filter Headings to count.
     * @example
     * // Count the number of Headings
     * const count = await prisma.headings.count({
     *   where: {
     *     // ... the filter for the Headings we want to count
     *   }
     * })
    **/
    count<T extends headingsCountArgs>(
      args?: Subset<T, headingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeadingsAggregateArgs>(args: Subset<T, HeadingsAggregateArgs>): Prisma.PrismaPromise<GetHeadingsAggregateType<T>>

    /**
     * Group by Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {headingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends headingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: headingsGroupByArgs['orderBy'] }
        : { orderBy?: headingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, headingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the headings model
   */
  readonly fields: headingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for headings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__headingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the headings model
   */ 
  interface headingsFieldRefs {
    readonly created: FieldRef<"headings", 'String'>
    readonly id: FieldRef<"headings", 'String'>
    readonly name: FieldRef<"headings", 'String'>
    readonly updated: FieldRef<"headings", 'String'>
    readonly day: FieldRef<"headings", 'String'>
    readonly active: FieldRef<"headings", 'Boolean'>
    readonly heading_number: FieldRef<"headings", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * headings findUnique
   */
  export type headingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings findUniqueOrThrow
   */
  export type headingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings findFirst
   */
  export type headingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of headings.
     */
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings findFirstOrThrow
   */
  export type headingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of headings.
     */
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings findMany
   */
  export type headingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter, which headings to fetch.
     */
    where?: headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of headings to fetch.
     */
    orderBy?: headingsOrderByWithRelationInput | headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing headings.
     */
    cursor?: headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` headings.
     */
    skip?: number
    distinct?: HeadingsScalarFieldEnum | HeadingsScalarFieldEnum[]
  }

  /**
   * headings create
   */
  export type headingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * The data needed to create a headings.
     */
    data?: XOR<headingsCreateInput, headingsUncheckedCreateInput>
  }

  /**
   * headings createMany
   */
  export type headingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many headings.
     */
    data: headingsCreateManyInput | headingsCreateManyInput[]
  }

  /**
   * headings createManyAndReturn
   */
  export type headingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * The data used to create many headings.
     */
    data: headingsCreateManyInput | headingsCreateManyInput[]
  }

  /**
   * headings update
   */
  export type headingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * The data needed to update a headings.
     */
    data: XOR<headingsUpdateInput, headingsUncheckedUpdateInput>
    /**
     * Choose, which headings to update.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings updateMany
   */
  export type headingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update headings.
     */
    data: XOR<headingsUpdateManyMutationInput, headingsUncheckedUpdateManyInput>
    /**
     * Filter which headings to update
     */
    where?: headingsWhereInput
  }

  /**
   * headings updateManyAndReturn
   */
  export type headingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * The data used to update headings.
     */
    data: XOR<headingsUpdateManyMutationInput, headingsUncheckedUpdateManyInput>
    /**
     * Filter which headings to update
     */
    where?: headingsWhereInput
  }

  /**
   * headings upsert
   */
  export type headingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * The filter to search for the headings to update in case it exists.
     */
    where: headingsWhereUniqueInput
    /**
     * In case the headings found by the `where` argument doesn't exist, create a new headings with this data.
     */
    create: XOR<headingsCreateInput, headingsUncheckedCreateInput>
    /**
     * In case the headings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<headingsUpdateInput, headingsUncheckedUpdateInput>
  }

  /**
   * headings delete
   */
  export type headingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
    /**
     * Filter which headings to delete.
     */
    where: headingsWhereUniqueInput
  }

  /**
   * headings deleteMany
   */
  export type headingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which headings to delete
     */
    where?: headingsWhereInput
  }

  /**
   * headings without action
   */
  export type headingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the headings
     */
    select?: headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the headings
     */
    omit?: headingsOmit<ExtArgs> | null
  }


  /**
   * Model stocks
   */

  export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  export type StocksMinAggregateOutputType = {
    bank_name: string | null
    created: string | null
    id: string | null
    updated: string | null
  }

  export type StocksMaxAggregateOutputType = {
    bank_name: string | null
    created: string | null
    id: string | null
    updated: string | null
  }

  export type StocksCountAggregateOutputType = {
    bank_name: number
    created: number
    id: number
    updated: number
    _all: number
  }


  export type StocksMinAggregateInputType = {
    bank_name?: true
    created?: true
    id?: true
    updated?: true
  }

  export type StocksMaxAggregateInputType = {
    bank_name?: true
    created?: true
    id?: true
    updated?: true
  }

  export type StocksCountAggregateInputType = {
    bank_name?: true
    created?: true
    id?: true
    updated?: true
    _all?: true
  }

  export type StocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to aggregate.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocksMaxAggregateInputType
  }

  export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks[P]>
      : GetScalarType<T[P], AggregateStocks[P]>
  }




  export type stocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocksWhereInput
    orderBy?: stocksOrderByWithAggregationInput | stocksOrderByWithAggregationInput[]
    by: StocksScalarFieldEnum[] | StocksScalarFieldEnum
    having?: stocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocksCountAggregateInputType | true
    _min?: StocksMinAggregateInputType
    _max?: StocksMaxAggregateInputType
  }

  export type StocksGroupByOutputType = {
    bank_name: string
    created: string
    id: string
    updated: string
    _count: StocksCountAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  type GetStocksGroupByPayload<T extends stocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocksGroupByOutputType[P]>
            : GetScalarType<T[P], StocksGroupByOutputType[P]>
        }
      >
    >


  export type stocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bank_name?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bank_name?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bank_name?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectScalar = {
    bank_name?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
  }

  export type stocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bank_name" | "created" | "id" | "updated", ExtArgs["result"]["stocks"]>

  export type $stocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stocks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bank_name: string
      created: string
      id: string
      updated: string
    }, ExtArgs["result"]["stocks"]>
    composites: {}
  }

  type stocksGetPayload<S extends boolean | null | undefined | stocksDefaultArgs> = $Result.GetResult<Prisma.$stocksPayload, S>

  type stocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocksCountAggregateInputType | true
    }

  export interface stocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stocks'], meta: { name: 'stocks' } }
    /**
     * Find zero or one Stocks that matches the filter.
     * @param {stocksFindUniqueArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stocksFindUniqueArgs>(args: SelectSubset<T, stocksFindUniqueArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stocksFindUniqueOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stocksFindUniqueOrThrowArgs>(args: SelectSubset<T, stocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stocksFindFirstArgs>(args?: SelectSubset<T, stocksFindFirstArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stocksFindFirstOrThrowArgs>(args?: SelectSubset<T, stocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stocks.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stocks.findMany({ take: 10 })
     * 
     * // Only select the `bank_name`
     * const stocksWithBank_nameOnly = await prisma.stocks.findMany({ select: { bank_name: true } })
     * 
     */
    findMany<T extends stocksFindManyArgs>(args?: SelectSubset<T, stocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stocks.
     * @param {stocksCreateArgs} args - Arguments to create a Stocks.
     * @example
     * // Create one Stocks
     * const Stocks = await prisma.stocks.create({
     *   data: {
     *     // ... data to create a Stocks
     *   }
     * })
     * 
     */
    create<T extends stocksCreateArgs>(args: SelectSubset<T, stocksCreateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stocks.
     * @param {stocksCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stocksCreateManyArgs>(args?: SelectSubset<T, stocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {stocksCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `bank_name`
     * const stocksWithBank_nameOnly = await prisma.stocks.createManyAndReturn({
     *   select: { bank_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stocksCreateManyAndReturnArgs>(args?: SelectSubset<T, stocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stocks.
     * @param {stocksDeleteArgs} args - Arguments to delete one Stocks.
     * @example
     * // Delete one Stocks
     * const Stocks = await prisma.stocks.delete({
     *   where: {
     *     // ... filter to delete one Stocks
     *   }
     * })
     * 
     */
    delete<T extends stocksDeleteArgs>(args: SelectSubset<T, stocksDeleteArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stocks.
     * @param {stocksUpdateArgs} args - Arguments to update one Stocks.
     * @example
     * // Update one Stocks
     * const stocks = await prisma.stocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stocksUpdateArgs>(args: SelectSubset<T, stocksUpdateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stocksDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stocksDeleteManyArgs>(args?: SelectSubset<T, stocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stocksUpdateManyArgs>(args: SelectSubset<T, stocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {stocksUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `bank_name`
     * const stocksWithBank_nameOnly = await prisma.stocks.updateManyAndReturn({
     *   select: { bank_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stocksUpdateManyAndReturnArgs>(args: SelectSubset<T, stocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stocks.
     * @param {stocksUpsertArgs} args - Arguments to update or create a Stocks.
     * @example
     * // Update or create a Stocks
     * const stocks = await prisma.stocks.upsert({
     *   create: {
     *     // ... data to create a Stocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks we want to update
     *   }
     * })
     */
    upsert<T extends stocksUpsertArgs>(args: SelectSubset<T, stocksUpsertArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stocks.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stocksCountArgs>(
      args?: Subset<T, stocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StocksAggregateArgs>(args: Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>

    /**
     * Group by Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stocksGroupByArgs['orderBy'] }
        : { orderBy?: stocksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stocks model
   */
  readonly fields: stocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stocks model
   */ 
  interface stocksFieldRefs {
    readonly bank_name: FieldRef<"stocks", 'String'>
    readonly created: FieldRef<"stocks", 'String'>
    readonly id: FieldRef<"stocks", 'String'>
    readonly updated: FieldRef<"stocks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stocks findUnique
   */
  export type stocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findUniqueOrThrow
   */
  export type stocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findFirst
   */
  export type stocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findFirstOrThrow
   */
  export type stocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findMany
   */
  export type stocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks create
   */
  export type stocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data needed to create a stocks.
     */
    data?: XOR<stocksCreateInput, stocksUncheckedCreateInput>
  }

  /**
   * stocks createMany
   */
  export type stocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stocksCreateManyInput | stocksCreateManyInput[]
  }

  /**
   * stocks createManyAndReturn
   */
  export type stocksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data used to create many stocks.
     */
    data: stocksCreateManyInput | stocksCreateManyInput[]
  }

  /**
   * stocks update
   */
  export type stocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data needed to update a stocks.
     */
    data: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
    /**
     * Choose, which stocks to update.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks updateMany
   */
  export type stocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stocksWhereInput
  }

  /**
   * stocks updateManyAndReturn
   */
  export type stocksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data used to update stocks.
     */
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stocksWhereInput
  }

  /**
   * stocks upsert
   */
  export type stocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The filter to search for the stocks to update in case it exists.
     */
    where: stocksWhereUniqueInput
    /**
     * In case the stocks found by the `where` argument doesn't exist, create a new stocks with this data.
     */
    create: XOR<stocksCreateInput, stocksUncheckedCreateInput>
    /**
     * In case the stocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
  }

  /**
   * stocks delete
   */
  export type stocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter which stocks to delete.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks deleteMany
   */
  export type stocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stocksWhereInput
  }

  /**
   * stocks without action
   */
  export type stocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
  }


  /**
   * Model stocks_headings
   */

  export type AggregateStocks_headings = {
    _count: Stocks_headingsCountAggregateOutputType | null
    _avg: Stocks_headingsAvgAggregateOutputType | null
    _sum: Stocks_headingsSumAggregateOutputType | null
    _min: Stocks_headingsMinAggregateOutputType | null
    _max: Stocks_headingsMaxAggregateOutputType | null
  }

  export type Stocks_headingsAvgAggregateOutputType = {
    previous_price: Decimal | null
    current_price: Decimal | null
    change_in_price: Decimal | null
  }

  export type Stocks_headingsSumAggregateOutputType = {
    previous_price: Decimal | null
    current_price: Decimal | null
    change_in_price: Decimal | null
  }

  export type Stocks_headingsMinAggregateOutputType = {
    created: string | null
    headings: string | null
    id: string | null
    stocks: string | null
    updated: string | null
    previous_price: Decimal | null
    current_price: Decimal | null
    change_in_price: Decimal | null
    percentage_change_in_price: string | null
  }

  export type Stocks_headingsMaxAggregateOutputType = {
    created: string | null
    headings: string | null
    id: string | null
    stocks: string | null
    updated: string | null
    previous_price: Decimal | null
    current_price: Decimal | null
    change_in_price: Decimal | null
    percentage_change_in_price: string | null
  }

  export type Stocks_headingsCountAggregateOutputType = {
    created: number
    headings: number
    id: number
    stocks: number
    updated: number
    previous_price: number
    current_price: number
    change_in_price: number
    percentage_change_in_price: number
    _all: number
  }


  export type Stocks_headingsAvgAggregateInputType = {
    previous_price?: true
    current_price?: true
    change_in_price?: true
  }

  export type Stocks_headingsSumAggregateInputType = {
    previous_price?: true
    current_price?: true
    change_in_price?: true
  }

  export type Stocks_headingsMinAggregateInputType = {
    created?: true
    headings?: true
    id?: true
    stocks?: true
    updated?: true
    previous_price?: true
    current_price?: true
    change_in_price?: true
    percentage_change_in_price?: true
  }

  export type Stocks_headingsMaxAggregateInputType = {
    created?: true
    headings?: true
    id?: true
    stocks?: true
    updated?: true
    previous_price?: true
    current_price?: true
    change_in_price?: true
    percentage_change_in_price?: true
  }

  export type Stocks_headingsCountAggregateInputType = {
    created?: true
    headings?: true
    id?: true
    stocks?: true
    updated?: true
    previous_price?: true
    current_price?: true
    change_in_price?: true
    percentage_change_in_price?: true
    _all?: true
  }

  export type Stocks_headingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks_headings to aggregate.
     */
    where?: stocks_headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_headings to fetch.
     */
    orderBy?: stocks_headingsOrderByWithRelationInput | stocks_headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stocks_headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks_headings
    **/
    _count?: true | Stocks_headingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stocks_headingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stocks_headingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stocks_headingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stocks_headingsMaxAggregateInputType
  }

  export type GetStocks_headingsAggregateType<T extends Stocks_headingsAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks_headings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks_headings[P]>
      : GetScalarType<T[P], AggregateStocks_headings[P]>
  }




  export type stocks_headingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocks_headingsWhereInput
    orderBy?: stocks_headingsOrderByWithAggregationInput | stocks_headingsOrderByWithAggregationInput[]
    by: Stocks_headingsScalarFieldEnum[] | Stocks_headingsScalarFieldEnum
    having?: stocks_headingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stocks_headingsCountAggregateInputType | true
    _avg?: Stocks_headingsAvgAggregateInputType
    _sum?: Stocks_headingsSumAggregateInputType
    _min?: Stocks_headingsMinAggregateInputType
    _max?: Stocks_headingsMaxAggregateInputType
  }

  export type Stocks_headingsGroupByOutputType = {
    created: string
    headings: string
    id: string
    stocks: string
    updated: string
    previous_price: Decimal
    current_price: Decimal
    change_in_price: Decimal
    percentage_change_in_price: string
    _count: Stocks_headingsCountAggregateOutputType | null
    _avg: Stocks_headingsAvgAggregateOutputType | null
    _sum: Stocks_headingsSumAggregateOutputType | null
    _min: Stocks_headingsMinAggregateOutputType | null
    _max: Stocks_headingsMaxAggregateOutputType | null
  }

  type GetStocks_headingsGroupByPayload<T extends stocks_headingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stocks_headingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stocks_headingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stocks_headingsGroupByOutputType[P]>
            : GetScalarType<T[P], Stocks_headingsGroupByOutputType[P]>
        }
      >
    >


  export type stocks_headingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    headings?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    previous_price?: boolean
    current_price?: boolean
    change_in_price?: boolean
    percentage_change_in_price?: boolean
  }, ExtArgs["result"]["stocks_headings"]>

  export type stocks_headingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    headings?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    previous_price?: boolean
    current_price?: boolean
    change_in_price?: boolean
    percentage_change_in_price?: boolean
  }, ExtArgs["result"]["stocks_headings"]>

  export type stocks_headingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    headings?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    previous_price?: boolean
    current_price?: boolean
    change_in_price?: boolean
    percentage_change_in_price?: boolean
  }, ExtArgs["result"]["stocks_headings"]>

  export type stocks_headingsSelectScalar = {
    created?: boolean
    headings?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    previous_price?: boolean
    current_price?: boolean
    change_in_price?: boolean
    percentage_change_in_price?: boolean
  }

  export type stocks_headingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created" | "headings" | "id" | "stocks" | "updated" | "previous_price" | "current_price" | "change_in_price" | "percentage_change_in_price", ExtArgs["result"]["stocks_headings"]>

  export type $stocks_headingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stocks_headings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created: string
      headings: string
      id: string
      stocks: string
      updated: string
      previous_price: Prisma.Decimal
      current_price: Prisma.Decimal
      change_in_price: Prisma.Decimal
      percentage_change_in_price: string
    }, ExtArgs["result"]["stocks_headings"]>
    composites: {}
  }

  type stocks_headingsGetPayload<S extends boolean | null | undefined | stocks_headingsDefaultArgs> = $Result.GetResult<Prisma.$stocks_headingsPayload, S>

  type stocks_headingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stocks_headingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stocks_headingsCountAggregateInputType | true
    }

  export interface stocks_headingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stocks_headings'], meta: { name: 'stocks_headings' } }
    /**
     * Find zero or one Stocks_headings that matches the filter.
     * @param {stocks_headingsFindUniqueArgs} args - Arguments to find a Stocks_headings
     * @example
     * // Get one Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stocks_headingsFindUniqueArgs>(args: SelectSubset<T, stocks_headingsFindUniqueArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stocks_headings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stocks_headingsFindUniqueOrThrowArgs} args - Arguments to find a Stocks_headings
     * @example
     * // Get one Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stocks_headingsFindUniqueOrThrowArgs>(args: SelectSubset<T, stocks_headingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks_headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsFindFirstArgs} args - Arguments to find a Stocks_headings
     * @example
     * // Get one Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stocks_headingsFindFirstArgs>(args?: SelectSubset<T, stocks_headingsFindFirstArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks_headings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsFindFirstOrThrowArgs} args - Arguments to find a Stocks_headings
     * @example
     * // Get one Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stocks_headingsFindFirstOrThrowArgs>(args?: SelectSubset<T, stocks_headingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stocks_headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findMany()
     * 
     * // Get first 10 Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.findMany({ take: 10 })
     * 
     * // Only select the `created`
     * const stocks_headingsWithCreatedOnly = await prisma.stocks_headings.findMany({ select: { created: true } })
     * 
     */
    findMany<T extends stocks_headingsFindManyArgs>(args?: SelectSubset<T, stocks_headingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stocks_headings.
     * @param {stocks_headingsCreateArgs} args - Arguments to create a Stocks_headings.
     * @example
     * // Create one Stocks_headings
     * const Stocks_headings = await prisma.stocks_headings.create({
     *   data: {
     *     // ... data to create a Stocks_headings
     *   }
     * })
     * 
     */
    create<T extends stocks_headingsCreateArgs>(args: SelectSubset<T, stocks_headingsCreateArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stocks_headings.
     * @param {stocks_headingsCreateManyArgs} args - Arguments to create many Stocks_headings.
     * @example
     * // Create many Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stocks_headingsCreateManyArgs>(args?: SelectSubset<T, stocks_headingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks_headings and returns the data saved in the database.
     * @param {stocks_headingsCreateManyAndReturnArgs} args - Arguments to create many Stocks_headings.
     * @example
     * // Create many Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks_headings and only return the `created`
     * const stocks_headingsWithCreatedOnly = await prisma.stocks_headings.createManyAndReturn({
     *   select: { created: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stocks_headingsCreateManyAndReturnArgs>(args?: SelectSubset<T, stocks_headingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stocks_headings.
     * @param {stocks_headingsDeleteArgs} args - Arguments to delete one Stocks_headings.
     * @example
     * // Delete one Stocks_headings
     * const Stocks_headings = await prisma.stocks_headings.delete({
     *   where: {
     *     // ... filter to delete one Stocks_headings
     *   }
     * })
     * 
     */
    delete<T extends stocks_headingsDeleteArgs>(args: SelectSubset<T, stocks_headingsDeleteArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stocks_headings.
     * @param {stocks_headingsUpdateArgs} args - Arguments to update one Stocks_headings.
     * @example
     * // Update one Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stocks_headingsUpdateArgs>(args: SelectSubset<T, stocks_headingsUpdateArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stocks_headings.
     * @param {stocks_headingsDeleteManyArgs} args - Arguments to filter Stocks_headings to delete.
     * @example
     * // Delete a few Stocks_headings
     * const { count } = await prisma.stocks_headings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stocks_headingsDeleteManyArgs>(args?: SelectSubset<T, stocks_headingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks_headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stocks_headingsUpdateManyArgs>(args: SelectSubset<T, stocks_headingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks_headings and returns the data updated in the database.
     * @param {stocks_headingsUpdateManyAndReturnArgs} args - Arguments to update many Stocks_headings.
     * @example
     * // Update many Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks_headings and only return the `created`
     * const stocks_headingsWithCreatedOnly = await prisma.stocks_headings.updateManyAndReturn({
     *   select: { created: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stocks_headingsUpdateManyAndReturnArgs>(args: SelectSubset<T, stocks_headingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stocks_headings.
     * @param {stocks_headingsUpsertArgs} args - Arguments to update or create a Stocks_headings.
     * @example
     * // Update or create a Stocks_headings
     * const stocks_headings = await prisma.stocks_headings.upsert({
     *   create: {
     *     // ... data to create a Stocks_headings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks_headings we want to update
     *   }
     * })
     */
    upsert<T extends stocks_headingsUpsertArgs>(args: SelectSubset<T, stocks_headingsUpsertArgs<ExtArgs>>): Prisma__stocks_headingsClient<$Result.GetResult<Prisma.$stocks_headingsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stocks_headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsCountArgs} args - Arguments to filter Stocks_headings to count.
     * @example
     * // Count the number of Stocks_headings
     * const count = await prisma.stocks_headings.count({
     *   where: {
     *     // ... the filter for the Stocks_headings we want to count
     *   }
     * })
    **/
    count<T extends stocks_headingsCountArgs>(
      args?: Subset<T, stocks_headingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stocks_headingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks_headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stocks_headingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stocks_headingsAggregateArgs>(args: Subset<T, Stocks_headingsAggregateArgs>): Prisma.PrismaPromise<GetStocks_headingsAggregateType<T>>

    /**
     * Group by Stocks_headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_headingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stocks_headingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stocks_headingsGroupByArgs['orderBy'] }
        : { orderBy?: stocks_headingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stocks_headingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocks_headingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stocks_headings model
   */
  readonly fields: stocks_headingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stocks_headings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stocks_headingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stocks_headings model
   */ 
  interface stocks_headingsFieldRefs {
    readonly created: FieldRef<"stocks_headings", 'String'>
    readonly headings: FieldRef<"stocks_headings", 'String'>
    readonly id: FieldRef<"stocks_headings", 'String'>
    readonly stocks: FieldRef<"stocks_headings", 'String'>
    readonly updated: FieldRef<"stocks_headings", 'String'>
    readonly previous_price: FieldRef<"stocks_headings", 'Decimal'>
    readonly current_price: FieldRef<"stocks_headings", 'Decimal'>
    readonly change_in_price: FieldRef<"stocks_headings", 'Decimal'>
    readonly percentage_change_in_price: FieldRef<"stocks_headings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stocks_headings findUnique
   */
  export type stocks_headingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter, which stocks_headings to fetch.
     */
    where: stocks_headingsWhereUniqueInput
  }

  /**
   * stocks_headings findUniqueOrThrow
   */
  export type stocks_headingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter, which stocks_headings to fetch.
     */
    where: stocks_headingsWhereUniqueInput
  }

  /**
   * stocks_headings findFirst
   */
  export type stocks_headingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter, which stocks_headings to fetch.
     */
    where?: stocks_headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_headings to fetch.
     */
    orderBy?: stocks_headingsOrderByWithRelationInput | stocks_headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks_headings.
     */
    cursor?: stocks_headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks_headings.
     */
    distinct?: Stocks_headingsScalarFieldEnum | Stocks_headingsScalarFieldEnum[]
  }

  /**
   * stocks_headings findFirstOrThrow
   */
  export type stocks_headingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter, which stocks_headings to fetch.
     */
    where?: stocks_headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_headings to fetch.
     */
    orderBy?: stocks_headingsOrderByWithRelationInput | stocks_headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks_headings.
     */
    cursor?: stocks_headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks_headings.
     */
    distinct?: Stocks_headingsScalarFieldEnum | Stocks_headingsScalarFieldEnum[]
  }

  /**
   * stocks_headings findMany
   */
  export type stocks_headingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter, which stocks_headings to fetch.
     */
    where?: stocks_headingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_headings to fetch.
     */
    orderBy?: stocks_headingsOrderByWithRelationInput | stocks_headingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks_headings.
     */
    cursor?: stocks_headingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_headings.
     */
    skip?: number
    distinct?: Stocks_headingsScalarFieldEnum | Stocks_headingsScalarFieldEnum[]
  }

  /**
   * stocks_headings create
   */
  export type stocks_headingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * The data needed to create a stocks_headings.
     */
    data?: XOR<stocks_headingsCreateInput, stocks_headingsUncheckedCreateInput>
  }

  /**
   * stocks_headings createMany
   */
  export type stocks_headingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks_headings.
     */
    data: stocks_headingsCreateManyInput | stocks_headingsCreateManyInput[]
  }

  /**
   * stocks_headings createManyAndReturn
   */
  export type stocks_headingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * The data used to create many stocks_headings.
     */
    data: stocks_headingsCreateManyInput | stocks_headingsCreateManyInput[]
  }

  /**
   * stocks_headings update
   */
  export type stocks_headingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * The data needed to update a stocks_headings.
     */
    data: XOR<stocks_headingsUpdateInput, stocks_headingsUncheckedUpdateInput>
    /**
     * Choose, which stocks_headings to update.
     */
    where: stocks_headingsWhereUniqueInput
  }

  /**
   * stocks_headings updateMany
   */
  export type stocks_headingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks_headings.
     */
    data: XOR<stocks_headingsUpdateManyMutationInput, stocks_headingsUncheckedUpdateManyInput>
    /**
     * Filter which stocks_headings to update
     */
    where?: stocks_headingsWhereInput
  }

  /**
   * stocks_headings updateManyAndReturn
   */
  export type stocks_headingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * The data used to update stocks_headings.
     */
    data: XOR<stocks_headingsUpdateManyMutationInput, stocks_headingsUncheckedUpdateManyInput>
    /**
     * Filter which stocks_headings to update
     */
    where?: stocks_headingsWhereInput
  }

  /**
   * stocks_headings upsert
   */
  export type stocks_headingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * The filter to search for the stocks_headings to update in case it exists.
     */
    where: stocks_headingsWhereUniqueInput
    /**
     * In case the stocks_headings found by the `where` argument doesn't exist, create a new stocks_headings with this data.
     */
    create: XOR<stocks_headingsCreateInput, stocks_headingsUncheckedCreateInput>
    /**
     * In case the stocks_headings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stocks_headingsUpdateInput, stocks_headingsUncheckedUpdateInput>
  }

  /**
   * stocks_headings delete
   */
  export type stocks_headingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
    /**
     * Filter which stocks_headings to delete.
     */
    where: stocks_headingsWhereUniqueInput
  }

  /**
   * stocks_headings deleteMany
   */
  export type stocks_headingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks_headings to delete
     */
    where?: stocks_headingsWhereInput
  }

  /**
   * stocks_headings without action
   */
  export type stocks_headingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_headings
     */
    select?: stocks_headingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_headings
     */
    omit?: stocks_headingsOmit<ExtArgs> | null
  }


  /**
   * Model stocks_users
   */

  export type AggregateStocks_users = {
    _count: Stocks_usersCountAggregateOutputType | null
    _min: Stocks_usersMinAggregateOutputType | null
    _max: Stocks_usersMaxAggregateOutputType | null
  }

  export type Stocks_usersMinAggregateOutputType = {
    created: string | null
    id: string | null
    stocks: string | null
    updated: string | null
    users: string | null
    share_count: string | null
    balance_when_shorting: string | null
    short_share_count: string | null
  }

  export type Stocks_usersMaxAggregateOutputType = {
    created: string | null
    id: string | null
    stocks: string | null
    updated: string | null
    users: string | null
    share_count: string | null
    balance_when_shorting: string | null
    short_share_count: string | null
  }

  export type Stocks_usersCountAggregateOutputType = {
    created: number
    id: number
    stocks: number
    updated: number
    users: number
    share_count: number
    balance_when_shorting: number
    short_share_count: number
    _all: number
  }


  export type Stocks_usersMinAggregateInputType = {
    created?: true
    id?: true
    stocks?: true
    updated?: true
    users?: true
    share_count?: true
    balance_when_shorting?: true
    short_share_count?: true
  }

  export type Stocks_usersMaxAggregateInputType = {
    created?: true
    id?: true
    stocks?: true
    updated?: true
    users?: true
    share_count?: true
    balance_when_shorting?: true
    short_share_count?: true
  }

  export type Stocks_usersCountAggregateInputType = {
    created?: true
    id?: true
    stocks?: true
    updated?: true
    users?: true
    share_count?: true
    balance_when_shorting?: true
    short_share_count?: true
    _all?: true
  }

  export type Stocks_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks_users to aggregate.
     */
    where?: stocks_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_users to fetch.
     */
    orderBy?: stocks_usersOrderByWithRelationInput | stocks_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stocks_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks_users
    **/
    _count?: true | Stocks_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stocks_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stocks_usersMaxAggregateInputType
  }

  export type GetStocks_usersAggregateType<T extends Stocks_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks_users[P]>
      : GetScalarType<T[P], AggregateStocks_users[P]>
  }




  export type stocks_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocks_usersWhereInput
    orderBy?: stocks_usersOrderByWithAggregationInput | stocks_usersOrderByWithAggregationInput[]
    by: Stocks_usersScalarFieldEnum[] | Stocks_usersScalarFieldEnum
    having?: stocks_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stocks_usersCountAggregateInputType | true
    _min?: Stocks_usersMinAggregateInputType
    _max?: Stocks_usersMaxAggregateInputType
  }

  export type Stocks_usersGroupByOutputType = {
    created: string
    id: string
    stocks: string
    updated: string
    users: string
    share_count: string
    balance_when_shorting: string
    short_share_count: string
    _count: Stocks_usersCountAggregateOutputType | null
    _min: Stocks_usersMinAggregateOutputType | null
    _max: Stocks_usersMaxAggregateOutputType | null
  }

  type GetStocks_usersGroupByPayload<T extends stocks_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stocks_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stocks_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stocks_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Stocks_usersGroupByOutputType[P]>
        }
      >
    >


  export type stocks_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    users?: boolean
    share_count?: boolean
    balance_when_shorting?: boolean
    short_share_count?: boolean
  }, ExtArgs["result"]["stocks_users"]>

  export type stocks_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    users?: boolean
    share_count?: boolean
    balance_when_shorting?: boolean
    short_share_count?: boolean
  }, ExtArgs["result"]["stocks_users"]>

  export type stocks_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    users?: boolean
    share_count?: boolean
    balance_when_shorting?: boolean
    short_share_count?: boolean
  }, ExtArgs["result"]["stocks_users"]>

  export type stocks_usersSelectScalar = {
    created?: boolean
    id?: boolean
    stocks?: boolean
    updated?: boolean
    users?: boolean
    share_count?: boolean
    balance_when_shorting?: boolean
    short_share_count?: boolean
  }

  export type stocks_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created" | "id" | "stocks" | "updated" | "users" | "share_count" | "balance_when_shorting" | "short_share_count", ExtArgs["result"]["stocks_users"]>

  export type $stocks_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stocks_users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created: string
      id: string
      stocks: string
      updated: string
      users: string
      share_count: string
      balance_when_shorting: string
      short_share_count: string
    }, ExtArgs["result"]["stocks_users"]>
    composites: {}
  }

  type stocks_usersGetPayload<S extends boolean | null | undefined | stocks_usersDefaultArgs> = $Result.GetResult<Prisma.$stocks_usersPayload, S>

  type stocks_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stocks_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stocks_usersCountAggregateInputType | true
    }

  export interface stocks_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stocks_users'], meta: { name: 'stocks_users' } }
    /**
     * Find zero or one Stocks_users that matches the filter.
     * @param {stocks_usersFindUniqueArgs} args - Arguments to find a Stocks_users
     * @example
     * // Get one Stocks_users
     * const stocks_users = await prisma.stocks_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stocks_usersFindUniqueArgs>(args: SelectSubset<T, stocks_usersFindUniqueArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stocks_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stocks_usersFindUniqueOrThrowArgs} args - Arguments to find a Stocks_users
     * @example
     * // Get one Stocks_users
     * const stocks_users = await prisma.stocks_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stocks_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, stocks_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersFindFirstArgs} args - Arguments to find a Stocks_users
     * @example
     * // Get one Stocks_users
     * const stocks_users = await prisma.stocks_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stocks_usersFindFirstArgs>(args?: SelectSubset<T, stocks_usersFindFirstArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stocks_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersFindFirstOrThrowArgs} args - Arguments to find a Stocks_users
     * @example
     * // Get one Stocks_users
     * const stocks_users = await prisma.stocks_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stocks_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, stocks_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stocks_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks_users
     * const stocks_users = await prisma.stocks_users.findMany()
     * 
     * // Get first 10 Stocks_users
     * const stocks_users = await prisma.stocks_users.findMany({ take: 10 })
     * 
     * // Only select the `created`
     * const stocks_usersWithCreatedOnly = await prisma.stocks_users.findMany({ select: { created: true } })
     * 
     */
    findMany<T extends stocks_usersFindManyArgs>(args?: SelectSubset<T, stocks_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stocks_users.
     * @param {stocks_usersCreateArgs} args - Arguments to create a Stocks_users.
     * @example
     * // Create one Stocks_users
     * const Stocks_users = await prisma.stocks_users.create({
     *   data: {
     *     // ... data to create a Stocks_users
     *   }
     * })
     * 
     */
    create<T extends stocks_usersCreateArgs>(args: SelectSubset<T, stocks_usersCreateArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stocks_users.
     * @param {stocks_usersCreateManyArgs} args - Arguments to create many Stocks_users.
     * @example
     * // Create many Stocks_users
     * const stocks_users = await prisma.stocks_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stocks_usersCreateManyArgs>(args?: SelectSubset<T, stocks_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks_users and returns the data saved in the database.
     * @param {stocks_usersCreateManyAndReturnArgs} args - Arguments to create many Stocks_users.
     * @example
     * // Create many Stocks_users
     * const stocks_users = await prisma.stocks_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks_users and only return the `created`
     * const stocks_usersWithCreatedOnly = await prisma.stocks_users.createManyAndReturn({
     *   select: { created: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stocks_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, stocks_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stocks_users.
     * @param {stocks_usersDeleteArgs} args - Arguments to delete one Stocks_users.
     * @example
     * // Delete one Stocks_users
     * const Stocks_users = await prisma.stocks_users.delete({
     *   where: {
     *     // ... filter to delete one Stocks_users
     *   }
     * })
     * 
     */
    delete<T extends stocks_usersDeleteArgs>(args: SelectSubset<T, stocks_usersDeleteArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stocks_users.
     * @param {stocks_usersUpdateArgs} args - Arguments to update one Stocks_users.
     * @example
     * // Update one Stocks_users
     * const stocks_users = await prisma.stocks_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stocks_usersUpdateArgs>(args: SelectSubset<T, stocks_usersUpdateArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stocks_users.
     * @param {stocks_usersDeleteManyArgs} args - Arguments to filter Stocks_users to delete.
     * @example
     * // Delete a few Stocks_users
     * const { count } = await prisma.stocks_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stocks_usersDeleteManyArgs>(args?: SelectSubset<T, stocks_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks_users
     * const stocks_users = await prisma.stocks_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stocks_usersUpdateManyArgs>(args: SelectSubset<T, stocks_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks_users and returns the data updated in the database.
     * @param {stocks_usersUpdateManyAndReturnArgs} args - Arguments to update many Stocks_users.
     * @example
     * // Update many Stocks_users
     * const stocks_users = await prisma.stocks_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks_users and only return the `created`
     * const stocks_usersWithCreatedOnly = await prisma.stocks_users.updateManyAndReturn({
     *   select: { created: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stocks_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, stocks_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stocks_users.
     * @param {stocks_usersUpsertArgs} args - Arguments to update or create a Stocks_users.
     * @example
     * // Update or create a Stocks_users
     * const stocks_users = await prisma.stocks_users.upsert({
     *   create: {
     *     // ... data to create a Stocks_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks_users we want to update
     *   }
     * })
     */
    upsert<T extends stocks_usersUpsertArgs>(args: SelectSubset<T, stocks_usersUpsertArgs<ExtArgs>>): Prisma__stocks_usersClient<$Result.GetResult<Prisma.$stocks_usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stocks_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersCountArgs} args - Arguments to filter Stocks_users to count.
     * @example
     * // Count the number of Stocks_users
     * const count = await prisma.stocks_users.count({
     *   where: {
     *     // ... the filter for the Stocks_users we want to count
     *   }
     * })
    **/
    count<T extends stocks_usersCountArgs>(
      args?: Subset<T, stocks_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stocks_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stocks_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stocks_usersAggregateArgs>(args: Subset<T, Stocks_usersAggregateArgs>): Prisma.PrismaPromise<GetStocks_usersAggregateType<T>>

    /**
     * Group by Stocks_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocks_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stocks_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stocks_usersGroupByArgs['orderBy'] }
        : { orderBy?: stocks_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stocks_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocks_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stocks_users model
   */
  readonly fields: stocks_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stocks_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stocks_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stocks_users model
   */ 
  interface stocks_usersFieldRefs {
    readonly created: FieldRef<"stocks_users", 'String'>
    readonly id: FieldRef<"stocks_users", 'String'>
    readonly stocks: FieldRef<"stocks_users", 'String'>
    readonly updated: FieldRef<"stocks_users", 'String'>
    readonly users: FieldRef<"stocks_users", 'String'>
    readonly share_count: FieldRef<"stocks_users", 'String'>
    readonly balance_when_shorting: FieldRef<"stocks_users", 'String'>
    readonly short_share_count: FieldRef<"stocks_users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stocks_users findUnique
   */
  export type stocks_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter, which stocks_users to fetch.
     */
    where: stocks_usersWhereUniqueInput
  }

  /**
   * stocks_users findUniqueOrThrow
   */
  export type stocks_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter, which stocks_users to fetch.
     */
    where: stocks_usersWhereUniqueInput
  }

  /**
   * stocks_users findFirst
   */
  export type stocks_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter, which stocks_users to fetch.
     */
    where?: stocks_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_users to fetch.
     */
    orderBy?: stocks_usersOrderByWithRelationInput | stocks_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks_users.
     */
    cursor?: stocks_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks_users.
     */
    distinct?: Stocks_usersScalarFieldEnum | Stocks_usersScalarFieldEnum[]
  }

  /**
   * stocks_users findFirstOrThrow
   */
  export type stocks_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter, which stocks_users to fetch.
     */
    where?: stocks_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_users to fetch.
     */
    orderBy?: stocks_usersOrderByWithRelationInput | stocks_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks_users.
     */
    cursor?: stocks_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks_users.
     */
    distinct?: Stocks_usersScalarFieldEnum | Stocks_usersScalarFieldEnum[]
  }

  /**
   * stocks_users findMany
   */
  export type stocks_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter, which stocks_users to fetch.
     */
    where?: stocks_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks_users to fetch.
     */
    orderBy?: stocks_usersOrderByWithRelationInput | stocks_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks_users.
     */
    cursor?: stocks_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks_users.
     */
    skip?: number
    distinct?: Stocks_usersScalarFieldEnum | Stocks_usersScalarFieldEnum[]
  }

  /**
   * stocks_users create
   */
  export type stocks_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * The data needed to create a stocks_users.
     */
    data?: XOR<stocks_usersCreateInput, stocks_usersUncheckedCreateInput>
  }

  /**
   * stocks_users createMany
   */
  export type stocks_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks_users.
     */
    data: stocks_usersCreateManyInput | stocks_usersCreateManyInput[]
  }

  /**
   * stocks_users createManyAndReturn
   */
  export type stocks_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * The data used to create many stocks_users.
     */
    data: stocks_usersCreateManyInput | stocks_usersCreateManyInput[]
  }

  /**
   * stocks_users update
   */
  export type stocks_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * The data needed to update a stocks_users.
     */
    data: XOR<stocks_usersUpdateInput, stocks_usersUncheckedUpdateInput>
    /**
     * Choose, which stocks_users to update.
     */
    where: stocks_usersWhereUniqueInput
  }

  /**
   * stocks_users updateMany
   */
  export type stocks_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks_users.
     */
    data: XOR<stocks_usersUpdateManyMutationInput, stocks_usersUncheckedUpdateManyInput>
    /**
     * Filter which stocks_users to update
     */
    where?: stocks_usersWhereInput
  }

  /**
   * stocks_users updateManyAndReturn
   */
  export type stocks_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * The data used to update stocks_users.
     */
    data: XOR<stocks_usersUpdateManyMutationInput, stocks_usersUncheckedUpdateManyInput>
    /**
     * Filter which stocks_users to update
     */
    where?: stocks_usersWhereInput
  }

  /**
   * stocks_users upsert
   */
  export type stocks_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * The filter to search for the stocks_users to update in case it exists.
     */
    where: stocks_usersWhereUniqueInput
    /**
     * In case the stocks_users found by the `where` argument doesn't exist, create a new stocks_users with this data.
     */
    create: XOR<stocks_usersCreateInput, stocks_usersUncheckedCreateInput>
    /**
     * In case the stocks_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stocks_usersUpdateInput, stocks_usersUncheckedUpdateInput>
  }

  /**
   * stocks_users delete
   */
  export type stocks_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
    /**
     * Filter which stocks_users to delete.
     */
    where: stocks_usersWhereUniqueInput
  }

  /**
   * stocks_users deleteMany
   */
  export type stocks_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks_users to delete
     */
    where?: stocks_usersWhereInput
  }

  /**
   * stocks_users without action
   */
  export type stocks_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks_users
     */
    select?: stocks_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks_users
     */
    omit?: stocks_usersOmit<ExtArgs> | null
  }


  /**
   * Model timer
   */

  export type AggregateTimer = {
    _count: TimerCountAggregateOutputType | null
    _avg: TimerAvgAggregateOutputType | null
    _sum: TimerSumAggregateOutputType | null
    _min: TimerMinAggregateOutputType | null
    _max: TimerMaxAggregateOutputType | null
  }

  export type TimerAvgAggregateOutputType = {
    round_time: Decimal | null
  }

  export type TimerSumAggregateOutputType = {
    round_time: Decimal | null
  }

  export type TimerMinAggregateOutputType = {
    active: boolean | null
    competition_end: string | null
    competition_start: string | null
    created: string | null
    id: string | null
    updated: string | null
    round_time: Decimal | null
  }

  export type TimerMaxAggregateOutputType = {
    active: boolean | null
    competition_end: string | null
    competition_start: string | null
    created: string | null
    id: string | null
    updated: string | null
    round_time: Decimal | null
  }

  export type TimerCountAggregateOutputType = {
    active: number
    competition_end: number
    competition_start: number
    created: number
    id: number
    updated: number
    round_time: number
    _all: number
  }


  export type TimerAvgAggregateInputType = {
    round_time?: true
  }

  export type TimerSumAggregateInputType = {
    round_time?: true
  }

  export type TimerMinAggregateInputType = {
    active?: true
    competition_end?: true
    competition_start?: true
    created?: true
    id?: true
    updated?: true
    round_time?: true
  }

  export type TimerMaxAggregateInputType = {
    active?: true
    competition_end?: true
    competition_start?: true
    created?: true
    id?: true
    updated?: true
    round_time?: true
  }

  export type TimerCountAggregateInputType = {
    active?: true
    competition_end?: true
    competition_start?: true
    created?: true
    id?: true
    updated?: true
    round_time?: true
    _all?: true
  }

  export type TimerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timer to aggregate.
     */
    where?: timerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timers to fetch.
     */
    orderBy?: timerOrderByWithRelationInput | timerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timers
    **/
    _count?: true | TimerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimerMaxAggregateInputType
  }

  export type GetTimerAggregateType<T extends TimerAggregateArgs> = {
        [P in keyof T & keyof AggregateTimer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimer[P]>
      : GetScalarType<T[P], AggregateTimer[P]>
  }




  export type timerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timerWhereInput
    orderBy?: timerOrderByWithAggregationInput | timerOrderByWithAggregationInput[]
    by: TimerScalarFieldEnum[] | TimerScalarFieldEnum
    having?: timerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimerCountAggregateInputType | true
    _avg?: TimerAvgAggregateInputType
    _sum?: TimerSumAggregateInputType
    _min?: TimerMinAggregateInputType
    _max?: TimerMaxAggregateInputType
  }

  export type TimerGroupByOutputType = {
    active: boolean
    competition_end: string
    competition_start: string
    created: string
    id: string
    updated: string
    round_time: Decimal
    _count: TimerCountAggregateOutputType | null
    _avg: TimerAvgAggregateOutputType | null
    _sum: TimerSumAggregateOutputType | null
    _min: TimerMinAggregateOutputType | null
    _max: TimerMaxAggregateOutputType | null
  }

  type GetTimerGroupByPayload<T extends timerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimerGroupByOutputType[P]>
            : GetScalarType<T[P], TimerGroupByOutputType[P]>
        }
      >
    >


  export type timerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    competition_end?: boolean
    competition_start?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
    round_time?: boolean
  }, ExtArgs["result"]["timer"]>

  export type timerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    competition_end?: boolean
    competition_start?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
    round_time?: boolean
  }, ExtArgs["result"]["timer"]>

  export type timerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    active?: boolean
    competition_end?: boolean
    competition_start?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
    round_time?: boolean
  }, ExtArgs["result"]["timer"]>

  export type timerSelectScalar = {
    active?: boolean
    competition_end?: boolean
    competition_start?: boolean
    created?: boolean
    id?: boolean
    updated?: boolean
    round_time?: boolean
  }

  export type timerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"active" | "competition_end" | "competition_start" | "created" | "id" | "updated" | "round_time", ExtArgs["result"]["timer"]>

  export type $timerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      active: boolean
      competition_end: string
      competition_start: string
      created: string
      id: string
      updated: string
      round_time: Prisma.Decimal
    }, ExtArgs["result"]["timer"]>
    composites: {}
  }

  type timerGetPayload<S extends boolean | null | undefined | timerDefaultArgs> = $Result.GetResult<Prisma.$timerPayload, S>

  type timerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimerCountAggregateInputType | true
    }

  export interface timerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timer'], meta: { name: 'timer' } }
    /**
     * Find zero or one Timer that matches the filter.
     * @param {timerFindUniqueArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timerFindUniqueArgs>(args: SelectSubset<T, timerFindUniqueArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Timer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timerFindUniqueOrThrowArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timerFindUniqueOrThrowArgs>(args: SelectSubset<T, timerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Timer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerFindFirstArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timerFindFirstArgs>(args?: SelectSubset<T, timerFindFirstArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Timer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerFindFirstOrThrowArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timerFindFirstOrThrowArgs>(args?: SelectSubset<T, timerFindFirstOrThrowArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Timers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timers
     * const timers = await prisma.timer.findMany()
     * 
     * // Get first 10 Timers
     * const timers = await prisma.timer.findMany({ take: 10 })
     * 
     * // Only select the `active`
     * const timerWithActiveOnly = await prisma.timer.findMany({ select: { active: true } })
     * 
     */
    findMany<T extends timerFindManyArgs>(args?: SelectSubset<T, timerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Timer.
     * @param {timerCreateArgs} args - Arguments to create a Timer.
     * @example
     * // Create one Timer
     * const Timer = await prisma.timer.create({
     *   data: {
     *     // ... data to create a Timer
     *   }
     * })
     * 
     */
    create<T extends timerCreateArgs>(args: SelectSubset<T, timerCreateArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Timers.
     * @param {timerCreateManyArgs} args - Arguments to create many Timers.
     * @example
     * // Create many Timers
     * const timer = await prisma.timer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timerCreateManyArgs>(args?: SelectSubset<T, timerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timers and returns the data saved in the database.
     * @param {timerCreateManyAndReturnArgs} args - Arguments to create many Timers.
     * @example
     * // Create many Timers
     * const timer = await prisma.timer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timers and only return the `active`
     * const timerWithActiveOnly = await prisma.timer.createManyAndReturn({
     *   select: { active: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends timerCreateManyAndReturnArgs>(args?: SelectSubset<T, timerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Timer.
     * @param {timerDeleteArgs} args - Arguments to delete one Timer.
     * @example
     * // Delete one Timer
     * const Timer = await prisma.timer.delete({
     *   where: {
     *     // ... filter to delete one Timer
     *   }
     * })
     * 
     */
    delete<T extends timerDeleteArgs>(args: SelectSubset<T, timerDeleteArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Timer.
     * @param {timerUpdateArgs} args - Arguments to update one Timer.
     * @example
     * // Update one Timer
     * const timer = await prisma.timer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timerUpdateArgs>(args: SelectSubset<T, timerUpdateArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Timers.
     * @param {timerDeleteManyArgs} args - Arguments to filter Timers to delete.
     * @example
     * // Delete a few Timers
     * const { count } = await prisma.timer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timerDeleteManyArgs>(args?: SelectSubset<T, timerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timers
     * const timer = await prisma.timer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timerUpdateManyArgs>(args: SelectSubset<T, timerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timers and returns the data updated in the database.
     * @param {timerUpdateManyAndReturnArgs} args - Arguments to update many Timers.
     * @example
     * // Update many Timers
     * const timer = await prisma.timer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timers and only return the `active`
     * const timerWithActiveOnly = await prisma.timer.updateManyAndReturn({
     *   select: { active: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends timerUpdateManyAndReturnArgs>(args: SelectSubset<T, timerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Timer.
     * @param {timerUpsertArgs} args - Arguments to update or create a Timer.
     * @example
     * // Update or create a Timer
     * const timer = await prisma.timer.upsert({
     *   create: {
     *     // ... data to create a Timer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timer we want to update
     *   }
     * })
     */
    upsert<T extends timerUpsertArgs>(args: SelectSubset<T, timerUpsertArgs<ExtArgs>>): Prisma__timerClient<$Result.GetResult<Prisma.$timerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Timers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerCountArgs} args - Arguments to filter Timers to count.
     * @example
     * // Count the number of Timers
     * const count = await prisma.timer.count({
     *   where: {
     *     // ... the filter for the Timers we want to count
     *   }
     * })
    **/
    count<T extends timerCountArgs>(
      args?: Subset<T, timerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimerAggregateArgs>(args: Subset<T, TimerAggregateArgs>): Prisma.PrismaPromise<GetTimerAggregateType<T>>

    /**
     * Group by Timer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends timerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timerGroupByArgs['orderBy'] }
        : { orderBy?: timerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, timerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timer model
   */
  readonly fields: timerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the timer model
   */ 
  interface timerFieldRefs {
    readonly active: FieldRef<"timer", 'Boolean'>
    readonly competition_end: FieldRef<"timer", 'String'>
    readonly competition_start: FieldRef<"timer", 'String'>
    readonly created: FieldRef<"timer", 'String'>
    readonly id: FieldRef<"timer", 'String'>
    readonly updated: FieldRef<"timer", 'String'>
    readonly round_time: FieldRef<"timer", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * timer findUnique
   */
  export type timerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter, which timer to fetch.
     */
    where: timerWhereUniqueInput
  }

  /**
   * timer findUniqueOrThrow
   */
  export type timerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter, which timer to fetch.
     */
    where: timerWhereUniqueInput
  }

  /**
   * timer findFirst
   */
  export type timerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter, which timer to fetch.
     */
    where?: timerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timers to fetch.
     */
    orderBy?: timerOrderByWithRelationInput | timerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timers.
     */
    cursor?: timerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timers.
     */
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * timer findFirstOrThrow
   */
  export type timerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter, which timer to fetch.
     */
    where?: timerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timers to fetch.
     */
    orderBy?: timerOrderByWithRelationInput | timerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timers.
     */
    cursor?: timerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timers.
     */
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * timer findMany
   */
  export type timerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter, which timers to fetch.
     */
    where?: timerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timers to fetch.
     */
    orderBy?: timerOrderByWithRelationInput | timerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timers.
     */
    cursor?: timerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timers.
     */
    skip?: number
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * timer create
   */
  export type timerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * The data needed to create a timer.
     */
    data?: XOR<timerCreateInput, timerUncheckedCreateInput>
  }

  /**
   * timer createMany
   */
  export type timerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timers.
     */
    data: timerCreateManyInput | timerCreateManyInput[]
  }

  /**
   * timer createManyAndReturn
   */
  export type timerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * The data used to create many timers.
     */
    data: timerCreateManyInput | timerCreateManyInput[]
  }

  /**
   * timer update
   */
  export type timerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * The data needed to update a timer.
     */
    data: XOR<timerUpdateInput, timerUncheckedUpdateInput>
    /**
     * Choose, which timer to update.
     */
    where: timerWhereUniqueInput
  }

  /**
   * timer updateMany
   */
  export type timerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timers.
     */
    data: XOR<timerUpdateManyMutationInput, timerUncheckedUpdateManyInput>
    /**
     * Filter which timers to update
     */
    where?: timerWhereInput
  }

  /**
   * timer updateManyAndReturn
   */
  export type timerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * The data used to update timers.
     */
    data: XOR<timerUpdateManyMutationInput, timerUncheckedUpdateManyInput>
    /**
     * Filter which timers to update
     */
    where?: timerWhereInput
  }

  /**
   * timer upsert
   */
  export type timerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * The filter to search for the timer to update in case it exists.
     */
    where: timerWhereUniqueInput
    /**
     * In case the timer found by the `where` argument doesn't exist, create a new timer with this data.
     */
    create: XOR<timerCreateInput, timerUncheckedCreateInput>
    /**
     * In case the timer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timerUpdateInput, timerUncheckedUpdateInput>
  }

  /**
   * timer delete
   */
  export type timerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
    /**
     * Filter which timer to delete.
     */
    where: timerWhereUniqueInput
  }

  /**
   * timer deleteMany
   */
  export type timerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timers to delete
     */
    where?: timerWhereInput
  }

  /**
   * timer without action
   */
  export type timerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer
     */
    select?: timerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer
     */
    omit?: timerOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    avatar: string | null
    created: string | null
    email: string | null
    emailVisibility: boolean | null
    id: string | null
    name: string | null
    password: string | null
    tokenKey: string | null
    updated: string | null
    username: string | null
    verified: boolean | null
    type: string | null
    wallet: string | null
  }

  export type UsersMaxAggregateOutputType = {
    avatar: string | null
    created: string | null
    email: string | null
    emailVisibility: boolean | null
    id: string | null
    name: string | null
    password: string | null
    tokenKey: string | null
    updated: string | null
    username: string | null
    verified: boolean | null
    type: string | null
    wallet: string | null
  }

  export type UsersCountAggregateOutputType = {
    avatar: number
    created: number
    email: number
    emailVisibility: number
    id: number
    name: number
    password: number
    tokenKey: number
    updated: number
    username: number
    verified: number
    type: number
    wallet: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    avatar?: true
    created?: true
    email?: true
    emailVisibility?: true
    id?: true
    name?: true
    password?: true
    tokenKey?: true
    updated?: true
    username?: true
    verified?: true
    type?: true
    wallet?: true
  }

  export type UsersMaxAggregateInputType = {
    avatar?: true
    created?: true
    email?: true
    emailVisibility?: true
    id?: true
    name?: true
    password?: true
    tokenKey?: true
    updated?: true
    username?: true
    verified?: true
    type?: true
    wallet?: true
  }

  export type UsersCountAggregateInputType = {
    avatar?: true
    created?: true
    email?: true
    emailVisibility?: true
    id?: true
    name?: true
    password?: true
    tokenKey?: true
    updated?: true
    username?: true
    verified?: true
    type?: true
    wallet?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    avatar: string
    created: string
    email: string
    emailVisibility: boolean
    id: string
    name: string
    password: string
    tokenKey: string
    updated: string
    username: string
    verified: boolean
    type: string
    wallet: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    avatar?: boolean
    created?: boolean
    email?: boolean
    emailVisibility?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    tokenKey?: boolean
    updated?: boolean
    username?: boolean
    verified?: boolean
    type?: boolean
    wallet?: boolean
    session?: boolean | users$sessionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    avatar?: boolean
    created?: boolean
    email?: boolean
    emailVisibility?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    tokenKey?: boolean
    updated?: boolean
    username?: boolean
    verified?: boolean
    type?: boolean
    wallet?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    avatar?: boolean
    created?: boolean
    email?: boolean
    emailVisibility?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    tokenKey?: boolean
    updated?: boolean
    username?: boolean
    verified?: boolean
    type?: boolean
    wallet?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    avatar?: boolean
    created?: boolean
    email?: boolean
    emailVisibility?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    tokenKey?: boolean
    updated?: boolean
    username?: boolean
    verified?: boolean
    type?: boolean
    wallet?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"avatar" | "created" | "email" | "emailVisibility" | "id" | "name" | "password" | "tokenKey" | "updated" | "username" | "verified" | "type" | "wallet", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | users$sessionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      session: Prisma.$sessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      avatar: string
      created: string
      email: string
      emailVisibility: boolean
      id: string
      name: string
      password: string
      tokenKey: string
      updated: string
      username: string
      verified: boolean
      type: string
      wallet: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `avatar`
     * const usersWithAvatarOnly = await prisma.users.findMany({ select: { avatar: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `avatar`
     * const usersWithAvatarOnly = await prisma.users.createManyAndReturn({
     *   select: { avatar: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `avatar`
     * const usersWithAvatarOnly = await prisma.users.updateManyAndReturn({
     *   select: { avatar: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends users$sessionArgs<ExtArgs> = {}>(args?: Subset<T, users$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly avatar: FieldRef<"users", 'String'>
    readonly created: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly emailVisibility: FieldRef<"users", 'Boolean'>
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly tokenKey: FieldRef<"users", 'String'>
    readonly updated: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly verified: FieldRef<"users", 'Boolean'>
    readonly type: FieldRef<"users", 'String'>
    readonly wallet: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.session
   */
  export type users$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    cursor?: sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionFindUniqueArgs>(args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionFindFirstArgs>(args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionFindManyArgs>(args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends sessionCreateArgs>(args: SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sessions.
     * @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionCreateManyArgs>(args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends sessionDeleteArgs>(args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionUpdateArgs>(args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionDeleteManyArgs>(args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionUpdateManyArgs>(args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends sessionUpsertArgs>(args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the session model
   */ 
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'String'>
    readonly userId: FieldRef<"session", 'String'>
    readonly expiresAt: FieldRef<"session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }

  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
  }

  /**
   * session createManyAndReturn
   */
  export type sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
  }

  /**
   * session updateManyAndReturn
   */
  export type sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }

  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
  }

  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompetitionScalarFieldEnum: {
    active: 'active',
    created: 'created',
    id: 'id',
    pause: 'pause',
    updated: 'updated',
    ended: 'ended'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const DaysScalarFieldEnum: {
    created: 'created',
    description: 'description',
    id: 'id',
    name: 'name',
    updated: 'updated',
    active: 'active'
  };

  export type DaysScalarFieldEnum = (typeof DaysScalarFieldEnum)[keyof typeof DaysScalarFieldEnum]


  export const HeadingsScalarFieldEnum: {
    created: 'created',
    id: 'id',
    name: 'name',
    updated: 'updated',
    day: 'day',
    active: 'active',
    heading_number: 'heading_number'
  };

  export type HeadingsScalarFieldEnum = (typeof HeadingsScalarFieldEnum)[keyof typeof HeadingsScalarFieldEnum]


  export const StocksScalarFieldEnum: {
    bank_name: 'bank_name',
    created: 'created',
    id: 'id',
    updated: 'updated'
  };

  export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum]


  export const Stocks_headingsScalarFieldEnum: {
    created: 'created',
    headings: 'headings',
    id: 'id',
    stocks: 'stocks',
    updated: 'updated',
    previous_price: 'previous_price',
    current_price: 'current_price',
    change_in_price: 'change_in_price',
    percentage_change_in_price: 'percentage_change_in_price'
  };

  export type Stocks_headingsScalarFieldEnum = (typeof Stocks_headingsScalarFieldEnum)[keyof typeof Stocks_headingsScalarFieldEnum]


  export const Stocks_usersScalarFieldEnum: {
    created: 'created',
    id: 'id',
    stocks: 'stocks',
    updated: 'updated',
    users: 'users',
    share_count: 'share_count',
    balance_when_shorting: 'balance_when_shorting',
    short_share_count: 'short_share_count'
  };

  export type Stocks_usersScalarFieldEnum = (typeof Stocks_usersScalarFieldEnum)[keyof typeof Stocks_usersScalarFieldEnum]


  export const TimerScalarFieldEnum: {
    active: 'active',
    competition_end: 'competition_end',
    competition_start: 'competition_start',
    created: 'created',
    id: 'id',
    updated: 'updated',
    round_time: 'round_time'
  };

  export type TimerScalarFieldEnum = (typeof TimerScalarFieldEnum)[keyof typeof TimerScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    avatar: 'avatar',
    created: 'created',
    email: 'email',
    emailVisibility: 'emailVisibility',
    id: 'id',
    name: 'name',
    password: 'password',
    tokenKey: 'tokenKey',
    updated: 'updated',
    username: 'username',
    verified: 'verified',
    type: 'type',
    wallet: 'wallet'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type competitionWhereInput = {
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    active?: BoolFilter<"competition"> | boolean
    created?: StringFilter<"competition"> | string
    id?: StringFilter<"competition"> | string
    pause?: BoolFilter<"competition"> | boolean
    updated?: StringFilter<"competition"> | string
    ended?: BoolFilter<"competition"> | boolean
  }

  export type competitionOrderByWithRelationInput = {
    active?: SortOrder
    created?: SortOrder
    id?: SortOrder
    pause?: SortOrder
    updated?: SortOrder
    ended?: SortOrder
  }

  export type competitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    active?: BoolFilter<"competition"> | boolean
    created?: StringFilter<"competition"> | string
    pause?: BoolFilter<"competition"> | boolean
    updated?: StringFilter<"competition"> | string
    ended?: BoolFilter<"competition"> | boolean
  }, "id">

  export type competitionOrderByWithAggregationInput = {
    active?: SortOrder
    created?: SortOrder
    id?: SortOrder
    pause?: SortOrder
    updated?: SortOrder
    ended?: SortOrder
    _count?: competitionCountOrderByAggregateInput
    _max?: competitionMaxOrderByAggregateInput
    _min?: competitionMinOrderByAggregateInput
  }

  export type competitionScalarWhereWithAggregatesInput = {
    AND?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    OR?: competitionScalarWhereWithAggregatesInput[]
    NOT?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    active?: BoolWithAggregatesFilter<"competition"> | boolean
    created?: StringWithAggregatesFilter<"competition"> | string
    id?: StringWithAggregatesFilter<"competition"> | string
    pause?: BoolWithAggregatesFilter<"competition"> | boolean
    updated?: StringWithAggregatesFilter<"competition"> | string
    ended?: BoolWithAggregatesFilter<"competition"> | boolean
  }

  export type daysWhereInput = {
    AND?: daysWhereInput | daysWhereInput[]
    OR?: daysWhereInput[]
    NOT?: daysWhereInput | daysWhereInput[]
    created?: StringFilter<"days"> | string
    description?: StringFilter<"days"> | string
    id?: StringFilter<"days"> | string
    name?: StringFilter<"days"> | string
    updated?: StringFilter<"days"> | string
    active?: BoolFilter<"days"> | boolean
  }

  export type daysOrderByWithRelationInput = {
    created?: SortOrder
    description?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    active?: SortOrder
  }

  export type daysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: daysWhereInput | daysWhereInput[]
    OR?: daysWhereInput[]
    NOT?: daysWhereInput | daysWhereInput[]
    created?: StringFilter<"days"> | string
    description?: StringFilter<"days"> | string
    name?: StringFilter<"days"> | string
    updated?: StringFilter<"days"> | string
    active?: BoolFilter<"days"> | boolean
  }, "id">

  export type daysOrderByWithAggregationInput = {
    created?: SortOrder
    description?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    active?: SortOrder
    _count?: daysCountOrderByAggregateInput
    _max?: daysMaxOrderByAggregateInput
    _min?: daysMinOrderByAggregateInput
  }

  export type daysScalarWhereWithAggregatesInput = {
    AND?: daysScalarWhereWithAggregatesInput | daysScalarWhereWithAggregatesInput[]
    OR?: daysScalarWhereWithAggregatesInput[]
    NOT?: daysScalarWhereWithAggregatesInput | daysScalarWhereWithAggregatesInput[]
    created?: StringWithAggregatesFilter<"days"> | string
    description?: StringWithAggregatesFilter<"days"> | string
    id?: StringWithAggregatesFilter<"days"> | string
    name?: StringWithAggregatesFilter<"days"> | string
    updated?: StringWithAggregatesFilter<"days"> | string
    active?: BoolWithAggregatesFilter<"days"> | boolean
  }

  export type headingsWhereInput = {
    AND?: headingsWhereInput | headingsWhereInput[]
    OR?: headingsWhereInput[]
    NOT?: headingsWhereInput | headingsWhereInput[]
    created?: StringFilter<"headings"> | string
    id?: StringFilter<"headings"> | string
    name?: StringFilter<"headings"> | string
    updated?: StringFilter<"headings"> | string
    day?: StringFilter<"headings"> | string
    active?: BoolFilter<"headings"> | boolean
    heading_number?: DecimalFilter<"headings"> | Decimal | DecimalJsLike | number | string
  }

  export type headingsOrderByWithRelationInput = {
    created?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    day?: SortOrder
    active?: SortOrder
    heading_number?: SortOrder
  }

  export type headingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: headingsWhereInput | headingsWhereInput[]
    OR?: headingsWhereInput[]
    NOT?: headingsWhereInput | headingsWhereInput[]
    created?: StringFilter<"headings"> | string
    name?: StringFilter<"headings"> | string
    updated?: StringFilter<"headings"> | string
    day?: StringFilter<"headings"> | string
    active?: BoolFilter<"headings"> | boolean
    heading_number?: DecimalFilter<"headings"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type headingsOrderByWithAggregationInput = {
    created?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    day?: SortOrder
    active?: SortOrder
    heading_number?: SortOrder
    _count?: headingsCountOrderByAggregateInput
    _avg?: headingsAvgOrderByAggregateInput
    _max?: headingsMaxOrderByAggregateInput
    _min?: headingsMinOrderByAggregateInput
    _sum?: headingsSumOrderByAggregateInput
  }

  export type headingsScalarWhereWithAggregatesInput = {
    AND?: headingsScalarWhereWithAggregatesInput | headingsScalarWhereWithAggregatesInput[]
    OR?: headingsScalarWhereWithAggregatesInput[]
    NOT?: headingsScalarWhereWithAggregatesInput | headingsScalarWhereWithAggregatesInput[]
    created?: StringWithAggregatesFilter<"headings"> | string
    id?: StringWithAggregatesFilter<"headings"> | string
    name?: StringWithAggregatesFilter<"headings"> | string
    updated?: StringWithAggregatesFilter<"headings"> | string
    day?: StringWithAggregatesFilter<"headings"> | string
    active?: BoolWithAggregatesFilter<"headings"> | boolean
    heading_number?: DecimalWithAggregatesFilter<"headings"> | Decimal | DecimalJsLike | number | string
  }

  export type stocksWhereInput = {
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    bank_name?: StringFilter<"stocks"> | string
    created?: StringFilter<"stocks"> | string
    id?: StringFilter<"stocks"> | string
    updated?: StringFilter<"stocks"> | string
  }

  export type stocksOrderByWithRelationInput = {
    bank_name?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
  }

  export type stocksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    bank_name?: StringFilter<"stocks"> | string
    created?: StringFilter<"stocks"> | string
    updated?: StringFilter<"stocks"> | string
  }, "id">

  export type stocksOrderByWithAggregationInput = {
    bank_name?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    _count?: stocksCountOrderByAggregateInput
    _max?: stocksMaxOrderByAggregateInput
    _min?: stocksMinOrderByAggregateInput
  }

  export type stocksScalarWhereWithAggregatesInput = {
    AND?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    OR?: stocksScalarWhereWithAggregatesInput[]
    NOT?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    bank_name?: StringWithAggregatesFilter<"stocks"> | string
    created?: StringWithAggregatesFilter<"stocks"> | string
    id?: StringWithAggregatesFilter<"stocks"> | string
    updated?: StringWithAggregatesFilter<"stocks"> | string
  }

  export type stocks_headingsWhereInput = {
    AND?: stocks_headingsWhereInput | stocks_headingsWhereInput[]
    OR?: stocks_headingsWhereInput[]
    NOT?: stocks_headingsWhereInput | stocks_headingsWhereInput[]
    created?: StringFilter<"stocks_headings"> | string
    headings?: StringFilter<"stocks_headings"> | string
    id?: StringFilter<"stocks_headings"> | string
    stocks?: StringFilter<"stocks_headings"> | string
    updated?: StringFilter<"stocks_headings"> | string
    previous_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFilter<"stocks_headings"> | string
  }

  export type stocks_headingsOrderByWithRelationInput = {
    created?: SortOrder
    headings?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
    percentage_change_in_price?: SortOrder
  }

  export type stocks_headingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stocks_headingsWhereInput | stocks_headingsWhereInput[]
    OR?: stocks_headingsWhereInput[]
    NOT?: stocks_headingsWhereInput | stocks_headingsWhereInput[]
    created?: StringFilter<"stocks_headings"> | string
    headings?: StringFilter<"stocks_headings"> | string
    stocks?: StringFilter<"stocks_headings"> | string
    updated?: StringFilter<"stocks_headings"> | string
    previous_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFilter<"stocks_headings"> | string
  }, "id">

  export type stocks_headingsOrderByWithAggregationInput = {
    created?: SortOrder
    headings?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
    percentage_change_in_price?: SortOrder
    _count?: stocks_headingsCountOrderByAggregateInput
    _avg?: stocks_headingsAvgOrderByAggregateInput
    _max?: stocks_headingsMaxOrderByAggregateInput
    _min?: stocks_headingsMinOrderByAggregateInput
    _sum?: stocks_headingsSumOrderByAggregateInput
  }

  export type stocks_headingsScalarWhereWithAggregatesInput = {
    AND?: stocks_headingsScalarWhereWithAggregatesInput | stocks_headingsScalarWhereWithAggregatesInput[]
    OR?: stocks_headingsScalarWhereWithAggregatesInput[]
    NOT?: stocks_headingsScalarWhereWithAggregatesInput | stocks_headingsScalarWhereWithAggregatesInput[]
    created?: StringWithAggregatesFilter<"stocks_headings"> | string
    headings?: StringWithAggregatesFilter<"stocks_headings"> | string
    id?: StringWithAggregatesFilter<"stocks_headings"> | string
    stocks?: StringWithAggregatesFilter<"stocks_headings"> | string
    updated?: StringWithAggregatesFilter<"stocks_headings"> | string
    previous_price?: DecimalWithAggregatesFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    current_price?: DecimalWithAggregatesFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalWithAggregatesFilter<"stocks_headings"> | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringWithAggregatesFilter<"stocks_headings"> | string
  }

  export type stocks_usersWhereInput = {
    AND?: stocks_usersWhereInput | stocks_usersWhereInput[]
    OR?: stocks_usersWhereInput[]
    NOT?: stocks_usersWhereInput | stocks_usersWhereInput[]
    created?: StringFilter<"stocks_users"> | string
    id?: StringFilter<"stocks_users"> | string
    stocks?: StringFilter<"stocks_users"> | string
    updated?: StringFilter<"stocks_users"> | string
    users?: StringFilter<"stocks_users"> | string
    share_count?: StringFilter<"stocks_users"> | string
    balance_when_shorting?: StringFilter<"stocks_users"> | string
    short_share_count?: StringFilter<"stocks_users"> | string
  }

  export type stocks_usersOrderByWithRelationInput = {
    created?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    users?: SortOrder
    share_count?: SortOrder
    balance_when_shorting?: SortOrder
    short_share_count?: SortOrder
  }

  export type stocks_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stocks_usersWhereInput | stocks_usersWhereInput[]
    OR?: stocks_usersWhereInput[]
    NOT?: stocks_usersWhereInput | stocks_usersWhereInput[]
    created?: StringFilter<"stocks_users"> | string
    stocks?: StringFilter<"stocks_users"> | string
    updated?: StringFilter<"stocks_users"> | string
    users?: StringFilter<"stocks_users"> | string
    share_count?: StringFilter<"stocks_users"> | string
    balance_when_shorting?: StringFilter<"stocks_users"> | string
    short_share_count?: StringFilter<"stocks_users"> | string
  }, "id">

  export type stocks_usersOrderByWithAggregationInput = {
    created?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    users?: SortOrder
    share_count?: SortOrder
    balance_when_shorting?: SortOrder
    short_share_count?: SortOrder
    _count?: stocks_usersCountOrderByAggregateInput
    _max?: stocks_usersMaxOrderByAggregateInput
    _min?: stocks_usersMinOrderByAggregateInput
  }

  export type stocks_usersScalarWhereWithAggregatesInput = {
    AND?: stocks_usersScalarWhereWithAggregatesInput | stocks_usersScalarWhereWithAggregatesInput[]
    OR?: stocks_usersScalarWhereWithAggregatesInput[]
    NOT?: stocks_usersScalarWhereWithAggregatesInput | stocks_usersScalarWhereWithAggregatesInput[]
    created?: StringWithAggregatesFilter<"stocks_users"> | string
    id?: StringWithAggregatesFilter<"stocks_users"> | string
    stocks?: StringWithAggregatesFilter<"stocks_users"> | string
    updated?: StringWithAggregatesFilter<"stocks_users"> | string
    users?: StringWithAggregatesFilter<"stocks_users"> | string
    share_count?: StringWithAggregatesFilter<"stocks_users"> | string
    balance_when_shorting?: StringWithAggregatesFilter<"stocks_users"> | string
    short_share_count?: StringWithAggregatesFilter<"stocks_users"> | string
  }

  export type timerWhereInput = {
    AND?: timerWhereInput | timerWhereInput[]
    OR?: timerWhereInput[]
    NOT?: timerWhereInput | timerWhereInput[]
    active?: BoolFilter<"timer"> | boolean
    competition_end?: StringFilter<"timer"> | string
    competition_start?: StringFilter<"timer"> | string
    created?: StringFilter<"timer"> | string
    id?: StringFilter<"timer"> | string
    updated?: StringFilter<"timer"> | string
    round_time?: DecimalFilter<"timer"> | Decimal | DecimalJsLike | number | string
  }

  export type timerOrderByWithRelationInput = {
    active?: SortOrder
    competition_end?: SortOrder
    competition_start?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    round_time?: SortOrder
  }

  export type timerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: timerWhereInput | timerWhereInput[]
    OR?: timerWhereInput[]
    NOT?: timerWhereInput | timerWhereInput[]
    active?: BoolFilter<"timer"> | boolean
    competition_end?: StringFilter<"timer"> | string
    competition_start?: StringFilter<"timer"> | string
    created?: StringFilter<"timer"> | string
    updated?: StringFilter<"timer"> | string
    round_time?: DecimalFilter<"timer"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type timerOrderByWithAggregationInput = {
    active?: SortOrder
    competition_end?: SortOrder
    competition_start?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    round_time?: SortOrder
    _count?: timerCountOrderByAggregateInput
    _avg?: timerAvgOrderByAggregateInput
    _max?: timerMaxOrderByAggregateInput
    _min?: timerMinOrderByAggregateInput
    _sum?: timerSumOrderByAggregateInput
  }

  export type timerScalarWhereWithAggregatesInput = {
    AND?: timerScalarWhereWithAggregatesInput | timerScalarWhereWithAggregatesInput[]
    OR?: timerScalarWhereWithAggregatesInput[]
    NOT?: timerScalarWhereWithAggregatesInput | timerScalarWhereWithAggregatesInput[]
    active?: BoolWithAggregatesFilter<"timer"> | boolean
    competition_end?: StringWithAggregatesFilter<"timer"> | string
    competition_start?: StringWithAggregatesFilter<"timer"> | string
    created?: StringWithAggregatesFilter<"timer"> | string
    id?: StringWithAggregatesFilter<"timer"> | string
    updated?: StringWithAggregatesFilter<"timer"> | string
    round_time?: DecimalWithAggregatesFilter<"timer"> | Decimal | DecimalJsLike | number | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    avatar?: StringFilter<"users"> | string
    created?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    emailVisibility?: BoolFilter<"users"> | boolean
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    tokenKey?: StringFilter<"users"> | string
    updated?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    verified?: BoolFilter<"users"> | boolean
    type?: StringFilter<"users"> | string
    wallet?: StringFilter<"users"> | string
    session?: SessionListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    avatar?: SortOrder
    created?: SortOrder
    email?: SortOrder
    emailVisibility?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tokenKey?: SortOrder
    updated?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    session?: sessionOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenKey?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    avatar?: StringFilter<"users"> | string
    created?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    emailVisibility?: BoolFilter<"users"> | boolean
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    updated?: StringFilter<"users"> | string
    verified?: BoolFilter<"users"> | boolean
    type?: StringFilter<"users"> | string
    wallet?: StringFilter<"users"> | string
    session?: SessionListRelationFilter
  }, "id" | "tokenKey" | "username">

  export type usersOrderByWithAggregationInput = {
    avatar?: SortOrder
    created?: SortOrder
    email?: SortOrder
    emailVisibility?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tokenKey?: SortOrder
    updated?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    avatar?: StringWithAggregatesFilter<"users"> | string
    created?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    emailVisibility?: BoolWithAggregatesFilter<"users"> | boolean
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    tokenKey?: StringWithAggregatesFilter<"users"> | string
    updated?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    verified?: BoolWithAggregatesFilter<"users"> | boolean
    type?: StringWithAggregatesFilter<"users"> | string
    wallet?: StringWithAggregatesFilter<"users"> | string
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: StringFilter<"session"> | string
    userId?: StringFilter<"session"> | string
    expiresAt?: StringFilter<"session"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    userId?: StringFilter<"session"> | string
    expiresAt?: StringFilter<"session"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: sessionCountOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"session"> | string
    userId?: StringWithAggregatesFilter<"session"> | string
    expiresAt?: StringWithAggregatesFilter<"session"> | string
  }

  export type competitionCreateInput = {
    active?: boolean
    created?: string
    id?: string
    pause?: boolean
    updated?: string
    ended?: boolean
  }

  export type competitionUncheckedCreateInput = {
    active?: boolean
    created?: string
    id?: string
    pause?: boolean
    updated?: string
    ended?: boolean
  }

  export type competitionUpdateInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    pause?: BoolFieldUpdateOperationsInput | boolean
    updated?: StringFieldUpdateOperationsInput | string
    ended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type competitionUncheckedUpdateInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    pause?: BoolFieldUpdateOperationsInput | boolean
    updated?: StringFieldUpdateOperationsInput | string
    ended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type competitionCreateManyInput = {
    active?: boolean
    created?: string
    id?: string
    pause?: boolean
    updated?: string
    ended?: boolean
  }

  export type competitionUpdateManyMutationInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    pause?: BoolFieldUpdateOperationsInput | boolean
    updated?: StringFieldUpdateOperationsInput | string
    ended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type competitionUncheckedUpdateManyInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    pause?: BoolFieldUpdateOperationsInput | boolean
    updated?: StringFieldUpdateOperationsInput | string
    ended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type daysCreateInput = {
    created?: string
    description?: string
    id?: string
    name?: string
    updated?: string
    active?: boolean
  }

  export type daysUncheckedCreateInput = {
    created?: string
    description?: string
    id?: string
    name?: string
    updated?: string
    active?: boolean
  }

  export type daysUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type daysUncheckedUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type daysCreateManyInput = {
    created?: string
    description?: string
    id?: string
    name?: string
    updated?: string
    active?: boolean
  }

  export type daysUpdateManyMutationInput = {
    created?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type daysUncheckedUpdateManyInput = {
    created?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type headingsCreateInput = {
    created?: string
    id?: string
    name?: string
    updated?: string
    day?: string
    active?: boolean
    heading_number?: Decimal | DecimalJsLike | number | string
  }

  export type headingsUncheckedCreateInput = {
    created?: string
    id?: string
    name?: string
    updated?: string
    day?: string
    active?: boolean
    heading_number?: Decimal | DecimalJsLike | number | string
  }

  export type headingsUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    heading_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type headingsUncheckedUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    heading_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type headingsCreateManyInput = {
    created?: string
    id?: string
    name?: string
    updated?: string
    day?: string
    active?: boolean
    heading_number?: Decimal | DecimalJsLike | number | string
  }

  export type headingsUpdateManyMutationInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    heading_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type headingsUncheckedUpdateManyInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    heading_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type stocksCreateInput = {
    bank_name?: string
    created?: string
    id?: string
    updated?: string
  }

  export type stocksUncheckedCreateInput = {
    bank_name?: string
    created?: string
    id?: string
    updated?: string
  }

  export type stocksUpdateInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
  }

  export type stocksUncheckedUpdateInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
  }

  export type stocksCreateManyInput = {
    bank_name?: string
    created?: string
    id?: string
    updated?: string
  }

  export type stocksUpdateManyMutationInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
  }

  export type stocksUncheckedUpdateManyInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_headingsCreateInput = {
    created?: string
    headings?: string
    id?: string
    stocks?: string
    updated?: string
    previous_price?: Decimal | DecimalJsLike | number | string
    current_price?: Decimal | DecimalJsLike | number | string
    change_in_price?: Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: string
  }

  export type stocks_headingsUncheckedCreateInput = {
    created?: string
    headings?: string
    id?: string
    stocks?: string
    updated?: string
    previous_price?: Decimal | DecimalJsLike | number | string
    current_price?: Decimal | DecimalJsLike | number | string
    change_in_price?: Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: string
  }

  export type stocks_headingsUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    headings?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    previous_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_headingsUncheckedUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    headings?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    previous_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_headingsCreateManyInput = {
    created?: string
    headings?: string
    id?: string
    stocks?: string
    updated?: string
    previous_price?: Decimal | DecimalJsLike | number | string
    current_price?: Decimal | DecimalJsLike | number | string
    change_in_price?: Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: string
  }

  export type stocks_headingsUpdateManyMutationInput = {
    created?: StringFieldUpdateOperationsInput | string
    headings?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    previous_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_headingsUncheckedUpdateManyInput = {
    created?: StringFieldUpdateOperationsInput | string
    headings?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    previous_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    current_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_in_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage_change_in_price?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_usersCreateInput = {
    created?: string
    id?: string
    stocks?: string
    updated?: string
    users?: string
    share_count?: string
    balance_when_shorting?: string
    short_share_count?: string
  }

  export type stocks_usersUncheckedCreateInput = {
    created?: string
    id?: string
    stocks?: string
    updated?: string
    users?: string
    share_count?: string
    balance_when_shorting?: string
    short_share_count?: string
  }

  export type stocks_usersUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    users?: StringFieldUpdateOperationsInput | string
    share_count?: StringFieldUpdateOperationsInput | string
    balance_when_shorting?: StringFieldUpdateOperationsInput | string
    short_share_count?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_usersUncheckedUpdateInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    users?: StringFieldUpdateOperationsInput | string
    share_count?: StringFieldUpdateOperationsInput | string
    balance_when_shorting?: StringFieldUpdateOperationsInput | string
    short_share_count?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_usersCreateManyInput = {
    created?: string
    id?: string
    stocks?: string
    updated?: string
    users?: string
    share_count?: string
    balance_when_shorting?: string
    short_share_count?: string
  }

  export type stocks_usersUpdateManyMutationInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    users?: StringFieldUpdateOperationsInput | string
    share_count?: StringFieldUpdateOperationsInput | string
    balance_when_shorting?: StringFieldUpdateOperationsInput | string
    short_share_count?: StringFieldUpdateOperationsInput | string
  }

  export type stocks_usersUncheckedUpdateManyInput = {
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    stocks?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    users?: StringFieldUpdateOperationsInput | string
    share_count?: StringFieldUpdateOperationsInput | string
    balance_when_shorting?: StringFieldUpdateOperationsInput | string
    short_share_count?: StringFieldUpdateOperationsInput | string
  }

  export type timerCreateInput = {
    active?: boolean
    competition_end?: string
    competition_start?: string
    created?: string
    id?: string
    updated?: string
    round_time?: Decimal | DecimalJsLike | number | string
  }

  export type timerUncheckedCreateInput = {
    active?: boolean
    competition_end?: string
    competition_start?: string
    created?: string
    id?: string
    updated?: string
    round_time?: Decimal | DecimalJsLike | number | string
  }

  export type timerUpdateInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    competition_end?: StringFieldUpdateOperationsInput | string
    competition_start?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    round_time?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type timerUncheckedUpdateInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    competition_end?: StringFieldUpdateOperationsInput | string
    competition_start?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    round_time?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type timerCreateManyInput = {
    active?: boolean
    competition_end?: string
    competition_start?: string
    created?: string
    id?: string
    updated?: string
    round_time?: Decimal | DecimalJsLike | number | string
  }

  export type timerUpdateManyMutationInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    competition_end?: StringFieldUpdateOperationsInput | string
    competition_start?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    round_time?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type timerUncheckedUpdateManyInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    competition_end?: StringFieldUpdateOperationsInput | string
    competition_start?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    round_time?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usersCreateInput = {
    avatar?: string
    created?: string
    email?: string
    emailVisibility?: boolean
    id?: string
    name?: string
    password: string
    tokenKey: string
    updated?: string
    username: string
    verified?: boolean
    type?: string
    wallet?: string
    session?: sessionCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    avatar?: string
    created?: string
    email?: string
    emailVisibility?: boolean
    id?: string
    name?: string
    password: string
    tokenKey: string
    updated?: string
    username: string
    verified?: boolean
    type?: string
    wallet?: string
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    session?: sessionUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    avatar?: string
    created?: string
    email?: string
    emailVisibility?: boolean
    id?: string
    name?: string
    password: string
    tokenKey: string
    updated?: string
    username: string
    verified?: boolean
    type?: string
    wallet?: string
  }

  export type usersUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
  }

  export type sessionCreateInput = {
    id?: string
    expiresAt: string
    user: usersCreateNestedOneWithoutSessionInput
  }

  export type sessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: string
  }

  export type sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }

  export type sessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: string
  }

  export type sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type competitionCountOrderByAggregateInput = {
    active?: SortOrder
    created?: SortOrder
    id?: SortOrder
    pause?: SortOrder
    updated?: SortOrder
    ended?: SortOrder
  }

  export type competitionMaxOrderByAggregateInput = {
    active?: SortOrder
    created?: SortOrder
    id?: SortOrder
    pause?: SortOrder
    updated?: SortOrder
    ended?: SortOrder
  }

  export type competitionMinOrderByAggregateInput = {
    active?: SortOrder
    created?: SortOrder
    id?: SortOrder
    pause?: SortOrder
    updated?: SortOrder
    ended?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type daysCountOrderByAggregateInput = {
    created?: SortOrder
    description?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    active?: SortOrder
  }

  export type daysMaxOrderByAggregateInput = {
    created?: SortOrder
    description?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    active?: SortOrder
  }

  export type daysMinOrderByAggregateInput = {
    created?: SortOrder
    description?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    active?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type headingsCountOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    day?: SortOrder
    active?: SortOrder
    heading_number?: SortOrder
  }

  export type headingsAvgOrderByAggregateInput = {
    heading_number?: SortOrder
  }

  export type headingsMaxOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    day?: SortOrder
    active?: SortOrder
    heading_number?: SortOrder
  }

  export type headingsMinOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    name?: SortOrder
    updated?: SortOrder
    day?: SortOrder
    active?: SortOrder
    heading_number?: SortOrder
  }

  export type headingsSumOrderByAggregateInput = {
    heading_number?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type stocksCountOrderByAggregateInput = {
    bank_name?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
  }

  export type stocksMaxOrderByAggregateInput = {
    bank_name?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
  }

  export type stocksMinOrderByAggregateInput = {
    bank_name?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
  }

  export type stocks_headingsCountOrderByAggregateInput = {
    created?: SortOrder
    headings?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
    percentage_change_in_price?: SortOrder
  }

  export type stocks_headingsAvgOrderByAggregateInput = {
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
  }

  export type stocks_headingsMaxOrderByAggregateInput = {
    created?: SortOrder
    headings?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
    percentage_change_in_price?: SortOrder
  }

  export type stocks_headingsMinOrderByAggregateInput = {
    created?: SortOrder
    headings?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
    percentage_change_in_price?: SortOrder
  }

  export type stocks_headingsSumOrderByAggregateInput = {
    previous_price?: SortOrder
    current_price?: SortOrder
    change_in_price?: SortOrder
  }

  export type stocks_usersCountOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    users?: SortOrder
    share_count?: SortOrder
    balance_when_shorting?: SortOrder
    short_share_count?: SortOrder
  }

  export type stocks_usersMaxOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    users?: SortOrder
    share_count?: SortOrder
    balance_when_shorting?: SortOrder
    short_share_count?: SortOrder
  }

  export type stocks_usersMinOrderByAggregateInput = {
    created?: SortOrder
    id?: SortOrder
    stocks?: SortOrder
    updated?: SortOrder
    users?: SortOrder
    share_count?: SortOrder
    balance_when_shorting?: SortOrder
    short_share_count?: SortOrder
  }

  export type timerCountOrderByAggregateInput = {
    active?: SortOrder
    competition_end?: SortOrder
    competition_start?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    round_time?: SortOrder
  }

  export type timerAvgOrderByAggregateInput = {
    round_time?: SortOrder
  }

  export type timerMaxOrderByAggregateInput = {
    active?: SortOrder
    competition_end?: SortOrder
    competition_start?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    round_time?: SortOrder
  }

  export type timerMinOrderByAggregateInput = {
    active?: SortOrder
    competition_end?: SortOrder
    competition_start?: SortOrder
    created?: SortOrder
    id?: SortOrder
    updated?: SortOrder
    round_time?: SortOrder
  }

  export type timerSumOrderByAggregateInput = {
    round_time?: SortOrder
  }

  export type SessionListRelationFilter = {
    every?: sessionWhereInput
    some?: sessionWhereInput
    none?: sessionWhereInput
  }

  export type sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    avatar?: SortOrder
    created?: SortOrder
    email?: SortOrder
    emailVisibility?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tokenKey?: SortOrder
    updated?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    avatar?: SortOrder
    created?: SortOrder
    email?: SortOrder
    emailVisibility?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tokenKey?: SortOrder
    updated?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    avatar?: SortOrder
    created?: SortOrder
    email?: SortOrder
    emailVisibility?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tokenKey?: SortOrder
    updated?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type sessionCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type sessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type sessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type sessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSessionInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    upsert?: usersUpsertWithoutSessionInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionInput, usersUpdateWithoutSessionInput>, usersUncheckedUpdateWithoutSessionInput>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type sessionCreateWithoutUserInput = {
    id?: string
    expiresAt: string
  }

  export type sessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: string
  }

  export type sessionCreateOrConnectWithoutUserInput = {
    where: sessionWhereUniqueInput
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionCreateManyUserInputEnvelope = {
    data: sessionCreateManyUserInput | sessionCreateManyUserInput[]
  }

  export type sessionUpsertWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    update: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionUpdateWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    data: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
  }

  export type sessionUpdateManyWithWhereWithoutUserInput = {
    where: sessionScalarWhereInput
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyWithoutUserInput>
  }

  export type sessionScalarWhereInput = {
    AND?: sessionScalarWhereInput | sessionScalarWhereInput[]
    OR?: sessionScalarWhereInput[]
    NOT?: sessionScalarWhereInput | sessionScalarWhereInput[]
    id?: StringFilter<"session"> | string
    userId?: StringFilter<"session"> | string
    expiresAt?: StringFilter<"session"> | string
  }

  export type usersCreateWithoutSessionInput = {
    avatar?: string
    created?: string
    email?: string
    emailVisibility?: boolean
    id?: string
    name?: string
    password: string
    tokenKey: string
    updated?: string
    username: string
    verified?: boolean
    type?: string
    wallet?: string
  }

  export type usersUncheckedCreateWithoutSessionInput = {
    avatar?: string
    created?: string
    email?: string
    emailVisibility?: boolean
    id?: string
    name?: string
    password: string
    tokenKey: string
    updated?: string
    username: string
    verified?: boolean
    type?: string
    wallet?: string
  }

  export type usersCreateOrConnectWithoutSessionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
  }

  export type usersUpsertWithoutSessionInput = {
    update: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
  }

  export type usersUpdateWithoutSessionInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutSessionInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    created?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVisibility?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tokenKey?: StringFieldUpdateOperationsInput | string
    updated?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
  }

  export type sessionCreateManyUserInput = {
    id?: string
    expiresAt: string
  }

  export type sessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }

  export type sessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }

  export type sessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}