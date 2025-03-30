import { Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
    async getAppointments() {
        return 'List of appointments';
    }
}