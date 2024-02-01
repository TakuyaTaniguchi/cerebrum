---
title: typeorm-extensionでseedを投入する
sidebar_position: 5
---

# UseFactroy


```js
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = new DataSource(options);
        if (initialized) {
          await dataSource.initialize();
          await runSeeders(dataSource);
        }
        return dataSource;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
```