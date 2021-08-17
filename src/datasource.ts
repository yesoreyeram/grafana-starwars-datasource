import {
  DataSourceApi,
  DataQueryResponse,
  FieldType,
  MutableDataFrame,
  DataSourceInstanceSettings,
} from '@grafana/data';

export class StarWarsDatasource extends DataSourceApi {
  constructor(instanceSettings: DataSourceInstanceSettings) {
    super(instanceSettings);
  }
  async query(): Promise<DataQueryResponse> {
    return new Promise((resolve) => {
      const frame = new MutableDataFrame({
        name: 'users',
        length: 2,
        fields: [
          {
            name: 'name',
            type: FieldType.string,
            values: ['Sriram', 'Divya', 'Chaarvik'],
          },
          {
            name: 'age',
            type: FieldType.number,
            values: [1, 2, 2.1],
          },
        ],
      });
      resolve({ data: [frame] });
    });
  }
  async testDatasource() {
    return new Promise((resolve) => {
      resolve({
        status: 'success',
        message: 'datasource saved',
      });
    });
  }
}
