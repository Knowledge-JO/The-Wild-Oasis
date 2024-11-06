import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: deletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} deleted successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error(`Error deleting booking`),
  });

  return { deleteBooking, deletingBooking };
}
